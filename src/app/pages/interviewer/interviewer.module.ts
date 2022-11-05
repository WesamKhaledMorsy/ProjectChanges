import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { InterviewerRoutingModule } from './interviewer-routing.module';
import {  RouterModule } from '@angular/router';
import { InterviewerCreateComponent } from './interviewer-create/interviewer-create.component';
import { InterviewerListComponent } from './interviewer-list/interviewer-list.component';




@NgModule({
  declarations: [
    InterviewerCreateComponent,
    InterviewerListComponent
  ],
  imports: [
    CommonModule,
    InterviewerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    DropzoneModule
  ],
  exports:[RouterModule]
})
export class InterviewerModule { }
