import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GradeCreateComponent } from './grade-create/grade-create.component';
import { GradeListComponent } from './grade-list/grade-list.component';


const routes:Routes =[
  {path:'createGrade', component:GradeCreateComponent},
  {path:'listGrade', component:GradeListComponent},
  {path:'edit/:id', component:GradeCreateComponent},
  {path:'',redirectTo:'listGrade',pathMatch:'full'}
  ]

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  exports:[
    RouterModule
  ]
})
export class GradeRoutingModule { }
