import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewProjectComponent } from './new-project/new-project.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { InstructionComponent } from './instruction/instruction.component';
import { AuthorComponent } from './author/author.component';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CardTableComponent } from './card-table/card-table.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { EngraverProcessComponent } from './engraver-process/engraver-process.component';

@NgModule({
  declarations: [
    AppComponent,
    NewProjectComponent,
    AllProjectsComponent,
    InstructionComponent,
    AuthorComponent,
    CardTableComponent,
    EngraverProcessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
