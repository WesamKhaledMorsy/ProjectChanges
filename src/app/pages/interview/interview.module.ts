import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewerCreateComponent } from '../interviewer/interviewer-create/interviewer-create.component';
import { InterviewerListComponent } from '../interviewer/interviewer-list/interviewer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { InterviewRoutingModule } from './interview-routing.module';



@NgModule({
  declarations: [
    InterviewerCreateComponent,
    InterviewerListComponent
  ],
  imports: [
    CommonModule,
    InterviewRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    DropzoneModule
  ]
})
export class InterviewModule { }
