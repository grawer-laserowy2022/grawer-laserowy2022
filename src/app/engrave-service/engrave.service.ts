import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MailInterface } from '../interface/MailInterface';

@Injectable({
  providedIn: 'root'
})
export class EngraveService {

  constructor(private httpClient: HttpClient) { }

  saveNewProject(img: any, titleProject: any, prog: number){
    const uploadImageData = new FormData();
    uploadImageData.append('image',img,img.name);
    uploadImageData.append('nameProject',titleProject);
    uploadImageData.append('prog', prog.toString())
    return this.httpClient.post("http://localhost:8080/engraver/createProject", uploadImageData);
  }

  getAllProjects(filters: String[]){
    let allFiters: String = this.prepareFilters(filters);
    return this.httpClient.get("http://localhost:8080/engraver/allProjects" + allFiters);
  }

  getPrepareImageView(img: any, prog: number){
    const uploadImageData = new FormData();
    uploadImageData.append('image',img,img.name);
    uploadImageData.append('prog', prog.toString());
    return this.httpClient.post("http://localhost:8080/engraver/prepareImgToView", uploadImageData);
  }

  getProject(nameProject: String){
    return this.httpClient.get(`http://localhost:8080/engraver/project?nameProject=${nameProject}`);
  }

  startEngraving(nameProject: String, imageType: String){
    return this.httpClient.get(`http://localhost:8080/engraver/start?projectName=${nameProject}&imageType=${imageType}`)
  }

  sendEmail(mail: MailInterface){
    return this.httpClient.post(`http://localhost:8080/engraver/sendEmail`,mail);
  }

  prepareFilters(filters: String[]): String{
    let allFilters: String ="";
    let i: number = 0;

    for(let filtr of filters){
      if(i!=0){
        allFilters=allFilters+"&"+filtr;
      }else{
        allFilters = "?" + filtr;
      }
      i++;
    }
    return allFilters;
  }
}
