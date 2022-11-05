import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { TrackCreateComponent } from './track-create/track-create.component';
import { TrackListComponent } from './track-list/track-list.component';
import { TrackRoutingModule } from './track-routing.module';
import { RouterLink, RouterModule } from '@angular/router';
import { TrackDetailsComponent } from './track-details/track-details.component';



@NgModule({
  declarations: [
    TrackCreateComponent,
    TrackListComponent,
    TrackDetailsComponent
  ],
  imports: [
    CommonModule,
    TrackRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    DropzoneModule
  ],
  exports:[RouterModule]
})
export class TrackModule { }
