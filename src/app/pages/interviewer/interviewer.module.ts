import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { InterviewCreateComponent } from '../interview/interview-create/interview-create.component';
import { InterviewListComponent } from '../interview/interview-list/interview-list.component';
import { InterviewerRoutingModule } from './interviewer-routing.module';




@NgModule({
  declarations: [
    InterviewCreateComponent,
    InterviewListComponent
  ],
  imports: [
    CommonModule,
    InterviewerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    DropzoneModule
  ]
})
export class InterviewerModule { }
