import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { GradeCreateComponent } from './grade-create/grade-create.component';
import { GradeListComponent } from './grade-list/grade-list.component';
import { GradeRoutingModule } from './grade-routing.module';



@NgModule({
  declarations: [
    GradeCreateComponent,
    GradeListComponent
  ],
  imports: [
    CommonModule,
    GradeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    DropzoneModule
  ]
})
export class GradeModule { }
