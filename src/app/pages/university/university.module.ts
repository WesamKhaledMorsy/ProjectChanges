import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversityCreateComponent } from './university-create/university-create.component';
import { UniversityListComponent } from './university-list/university-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { UniversityRoutingModule } from './university-routing.module';




@NgModule({
  declarations: [
    UniversityCreateComponent,
    UniversityListComponent
  ],
  imports: [
    CommonModule,
    UniversityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    DropzoneModule
  ]
})
export class UniversityModule { }
