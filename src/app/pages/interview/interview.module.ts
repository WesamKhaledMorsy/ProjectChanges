import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewerCreateComponent } from '../interviewer/interviewer-create/interviewer-create.component';
import { InterviewerListComponent } from '../interviewer/interviewer-list/interviewer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

import {  RouterModule } from '@angular/router';
import { InterviewRoutingModule } from './interview-routing.module';
import { InterviewListComponent } from './interview-list/interview-list.component';
import { InterviewCreateComponent } from './interview-create/interview-create.component';



@NgModule({
  declarations: [
    InterviewCreateComponent,
    InterviewListComponent,
  ],
  imports: [
    CommonModule,
    InterviewRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    DropzoneModule,
    RouterModule
  ],
   exports:[RouterModule]
})
export class InterviewModule { }
