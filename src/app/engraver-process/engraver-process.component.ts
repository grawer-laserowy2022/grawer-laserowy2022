import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EngraveService } from '../engrave-service/engrave.service';

enum ProcessEngrave{
  WORK, NOT_WORK
}

@Component({
  selector: 'app-engraver-process',
  templateUrl: './engraver-process.component.html',
  styleUrls: ['./engraver-process.component.css']
})
export class EngraverProcessComponent implements OnInit {

  projectName: String = "";
  image = new Array(4);
  selectedOption: String = "BINARY";
  processEngrave: ProcessEngrave = ProcessEngrave.NOT_WORK;

  constructor(private activatedRoute: ActivatedRoute, private engraverService: EngraveService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.projectName = String(this.activatedRoute.snapshot.paramMap.get('nameProject'));

    this.engraverService.getProject(this.projectName).subscribe((response)=>{
      console.log(response);
      //@ts-ignore
      this.image[0] = 'data:image/jpeg;base64,' + response.originalImg.picByte;
      //@ts-ignore
      this.image[1] = 'data:image/jpeg;base64,' + response.monochromeImg.picByte;
      //@ts-ignore
      this.image[2] = 'data:image/jpeg;base64,' + response.binaryImg.picByte;
    },(error)=>{
      console.error(error);
    })
    
  }

  changeOptionEngraver(event: any): void{
    this.selectedOption = event.target.value;
  }

  startEngraving(): void{
    this.processEngrave = ProcessEngrave.WORK;
    this.toastrService.warning("Rozpoczęto proces grawerowania.");
    this.engraverService.startEngraving(this.projectName, this.selectedOption).subscribe((response)=>{
      this.processEngrave = ProcessEngrave.NOT_WORK;
      this.toastrService.success("Zakończono grawerowanie.")
    },
    (error)=>{
      this.processEngrave = ProcessEngrave.NOT_WORK;
      this.toastrService.error("W trakcie grawerowania wystąpił bład!")
    });
  }
}
