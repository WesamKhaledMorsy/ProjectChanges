import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InterviewerCreateComponent } from './interviewer-create/interviewer-create.component';
import { InterviewerListComponent } from './interviewer-list/interviewer-list.component';



const routes:Routes =[
  {path:'',redirectTo:'listInterviewer',pathMatch:'full'},
  {path:'createInterviewer', component:InterviewerCreateComponent},
  {path:'listInterviewer', component:InterviewerListComponent},
  {path:'edit/:id', component:InterviewerCreateComponent},

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
