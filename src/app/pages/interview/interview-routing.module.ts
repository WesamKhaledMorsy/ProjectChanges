import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InterviewListComponent } from './interview-list/interview-list.component';
import { InterviewCreateComponent } from './interview-create/interview-create.component';

const routes:Routes =[
  {path:'',redirectTo:'listInterview',pathMatch:'full'},
  {path:'createInterview', component:InterviewCreateComponent},
  {path:'listInterview', component:InterviewListComponent},
  {path:'edit/:id', component:InterviewCreateComponent},
  ];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class InterviewRoutingModule { }
