import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { AuthorComponent } from './author/author.component';
import { EngraverProcessComponent } from './engraver-process/engraver-process.component';
import { InstructionComponent } from './instruction/instruction.component';
import { NewProjectComponent } from './new-project/new-project.component';

export const routes: Routes = [
  {path:'author', component: AuthorComponent},
  {path:'allProjects', component: AllProjectsComponent},
  {path:'instruction', component: InstructionComponent},
  {path:'newProject', component: NewProjectComponent},
  {path:'allProjects/:nameProject', component: EngraverProcessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
