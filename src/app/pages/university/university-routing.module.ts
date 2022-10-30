import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UniversityCreateComponent } from './university-create/university-create.component';
import { UniversityListComponent } from './university-list/university-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';


const routes:Routes =[
  {path:'createUniversity', component:UniversityCreateComponent},
  {path:'listUniversity', component:UniversityListComponent},
  {path:'edit/:id',component:UniversityCreateComponent}

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
export class UniversityRoutingModule { }
