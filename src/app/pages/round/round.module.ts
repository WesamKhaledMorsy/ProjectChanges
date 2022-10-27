import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundRoutingModule } from './round-routing.module';
import { RoundCreateComponent } from './round-create/round-create.component';
import { RoundListComponent } from './round-list/round-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';



@NgModule({
  declarations: [
    RoundCreateComponent,
    RoundListComponent
  ],
  imports: [
    CommonModule,
    RoundRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    DropzoneModule
  ],
  
})
export class RoundModule { }
