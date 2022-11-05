import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoundCreateComponent } from './round-create/round-create.component';
import { RoundListComponent } from './round-list/round-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { RoundDetailsComponent } from './round-details/round-details.component';


const routes:Routes =[
  {path:'createRound', component:RoundCreateComponent},
  {path:'listRound', component:RoundListComponent},
  {path:'edit/:id', component:RoundCreateComponent},
  {path:'detailsRound/:id',component:RoundDetailsComponent},
  {path:'',redirectTo:'listRound',pathMatch:'full'}

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
export class RoundRoutingModule { }
