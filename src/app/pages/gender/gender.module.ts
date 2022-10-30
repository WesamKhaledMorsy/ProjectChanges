import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenderCreateComponent } from './gender-create/gender-create.component';
import { GenderListComponent } from './gender-list/gender-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { GenderRoutingModule } from './gender-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GenderCreateComponent,
    GenderListComponent
  ],
  imports: [
    CommonModule,
    GenderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    DropzoneModule
  ],
  exports: [RouterModule]
})
export class GenderModule { }
