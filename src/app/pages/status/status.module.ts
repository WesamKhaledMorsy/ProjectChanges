import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusCreateComponent } from './status-create/status-create.component';
import { StatusListComponent } from './status-list/status-list.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { StatusRoutingModule } from './status-routing.module';




@NgModule({
  declarations: [
    StatusCreateComponent,
    StatusListComponent
  ],
  imports: [
    CommonModule,
    StatusRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    DropzoneModule
  ]
})
export class StatusModule { }
