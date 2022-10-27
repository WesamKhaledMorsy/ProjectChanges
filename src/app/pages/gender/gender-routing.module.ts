import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GenderCreateComponent } from './gender-create/gender-create.component';
import { GenderListComponent } from './gender-list/gender-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

const routes:Routes =[
  {path:'createGender', component:GenderCreateComponent},
  {path:'listGender', component:GenderListComponent},
  {path:'edit/:id', component:GenderCreateComponent},

  ]

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class GenderRoutingModule { }
