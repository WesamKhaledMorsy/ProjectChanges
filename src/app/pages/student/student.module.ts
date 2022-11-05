import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { UiModule } from '../ui/ui.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ArchwizardModule } from 'angular-archwizard';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgxDropzoneModule } from 'ngx-dropzone';




@NgModule({
  declarations: [
    StudentCreateComponent,
    StudentListComponent,
    StudentProfileComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    DropzoneModule,
    CKEditorModule,
    ArchwizardModule,
    NgxMaskModule.forRoot(),
    NgSelectModule,
    UiSwitchModule,
    ColorPickerModule,
    NgbDatepickerModule,
    DropzoneModule,
    FlatpickrModule.forRoot(),
    NgxDropzoneModule
  ],
  exports: [RouterModule]
})
export class StudentModule { }
