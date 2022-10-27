import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StatusCreateComponent } from './status-create/status-create.component';
import { StatusListComponent } from './status-list/status-list.component';



const routes:Routes =[
  {path:'createStatus', component:StatusCreateComponent},
  {path:'listStatus', component:StatusListComponent},
  {path:'edit/:id', component:StatusCreateComponent},

  ]
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
