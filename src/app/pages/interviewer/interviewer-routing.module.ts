import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InterviewerCreateComponent } from './interviewer-create/interviewer-create.component';
import { InterviewerListComponent } from './interviewer-list/interviewer-list.component';
import { InterviewerDetailsComponent } from './interviewer-details/interviewer-details.component';



const routes:Routes =[
  {path:'',redirectTo:'listInterviewer',pathMatch:'full'},
  {path:'createInterviewer', component:InterviewerCreateComponent},
  {path:'listInterviewer', component:InterviewerListComponent},
  {path:'edit/:id', component:InterviewerCreateComponent},
  {path:'detailsInterviewer/:id',component:InterviewerDetailsComponent},
  {path:'detailsInterviewer',component:InterviewerDetailsComponent}

  ]
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class InterviewerRoutingModule { }
