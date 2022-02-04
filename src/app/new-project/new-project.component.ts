import { Component, OnChanges, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EngraveService } from '../engrave-service/engrave.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  //@ts-ignore
  file?: File = null;
  url: any;

  retrievedImages = new Array(4);
  base64Data = new Array(4);

  prog: number = 100;
  constructor(private service: EngraveService, private toastrService: ToastrService) { }

  //@ts-ignore
  projectForm: ICreateProject = {};
  

  ngOnInit(): void {
  }

  createProject(){
    this.toastrService.warning("Proszę czekać, trwa tworzenie projektu")
    this.service.saveNewProject(this.file,this.projectForm.name, this.prog).subscribe((response)=>{
      this.toastrService.success("Stworzono nowy projekt");
    },(error)=>{
      this.toastrService.error("W trakcie tworzenia projektu wystapił błąd");
    })
  }

  setFile(event:any){
    this.file = event.target.files[0];
    const files = event.target.files;

    const reader = new FileReader();
    reader.readAsDataURL(files[0])
    reader.onload = (_event)=> {
      this.url = reader.result;
    }

    this.getPrepareImagesToView();
  }

  updateProg(event: any): void{
    this.prog = event.target.value;
    if(this.file){
      this.getPrepareImagesToView();
    }
  }

  getPrepareImagesToView(){
    this.service.getPrepareImageView(this.file, this.prog).subscribe((response)=>{
      const retriveResponse: any = response;
      for( let i=0; i<2; i++){
        this.base64Data[i] = retriveResponse[i].picByte;
        this.retrievedImages[i] = 'data:image/jpeg;base64,' + this.base64Data[i];
      }

    }, (error) =>{
      console.log(error);
    });
  }
}

interface ICreateProject{
    name?: string;
}
