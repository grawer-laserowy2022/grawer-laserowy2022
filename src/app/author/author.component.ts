import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EngraveService } from '../engrave-service/engrave.service';
import { MailInterface } from '../interface/MailInterface';
import { MailStatus } from './email.enums';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(private engraverService: EngraveService, private toastrService: ToastrService) { }

  mailIsSending: boolean = false;
  mail: MailInterface = {
    message: "",
    author: ""
  }

  ngOnInit(): void {
  }

  sendEmail(event: any): void{
    this.mailIsSending = true;
    this.toastrService.warning(MailStatus.PROCESSING);
     this.engraverService.sendEmail(this.mail).subscribe(()=>{
       this.toastrService.success(MailStatus.OK);
     },()=>{
       this.toastrService.error(MailStatus.ERROR);
     });
     this.mailIsSending = false;
  }

  buttonIsActive(): boolean{
    const{message, author} = this.mail;
    //@ts-ignore
    if(message?.length<4 || author?.length<4)
      return true;
    else
      return false;
  }
}
