import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit, OnChanges {

  @Input()
  nameProject?: string;
  @Input()
  originalPhotoBinary: any;
  @Input()
  monochromePhotoBinary: any;
  @Input()
  binaryPhotoBinary: any;
  @Input()
  isLeftCard: boolean = true;

  originalPhoto: any;
  monochromePhoto: any;
  binaryPhoto: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    if(this.originalPhotoBinary)
      this.originalPhoto = 'data:image/jpeg;base64,' + this.originalPhotoBinary;
    if(this.binaryPhotoBinary)
      this.binaryPhoto = 'data:image/jpeg;base64,' + this.binaryPhotoBinary;
    if(this.monochromePhotoBinary)
      this.monochromePhoto = 'data:image/jpeg;base64,' + this.monochromePhotoBinary;
  }

  public openProject(): void{
    console.log("Open Project");
    this.router.navigateByUrl(`/allProjects/${this.nameProject}`)
  }

}
