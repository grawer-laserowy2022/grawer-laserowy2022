import { Component, OnInit } from '@angular/core';
import { EngraveService } from '../engrave-service/engrave.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

  constructor(private engraverService: EngraveService) { }

  filters: String[] = ["page=0","size=4","nameProject="]
  allProjects: any[] = [];
  activePage: number = 1;
  totalPages: number = 0;

  ngOnInit(): void {
    this.updateAllProject();
  }

  userSerachNameProject(event: any): void{
    let nameProject = event.target.value
    this.updateNameProjectFilter(nameProject);
  }

  updateNameProjectFilter(nameProject: any): void{
    this.filters[2] = `nameProject=${nameProject}`
    this.changePage(1);
  }

  updateAllProject(): void{
    this.engraverService.getAllProjects(this.filters).subscribe((response)=>{
      //@ts-ignore
      this.allProjects = response.content;
      //@ts-ignore
      this.totalPages = response.totalPages;
    },
    (error)=>{
      console.error(error);
    })
  }

  prepareNumbersTable(howManyNumber: number): number[]{
    let resultTable: number[] = [];
    for(let i=0; i<howManyNumber; i++){
      resultTable.push(i+1);
    }
    return resultTable;
  }

  changePage(numberPage: number): void{
    this.filters[0]=`page=${numberPage-1}`;
    this.activePage = numberPage;
    this.updateAllProject();
  }
}
