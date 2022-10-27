import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { RouterModule, Routes } from '@angular/router';
import { TrackCreateComponent } from './track-create/track-create.component';
import { TrackListComponent } from './track-list/track-list.component';



const routes:Routes =[
  {path:'createTrack', component:TrackCreateComponent},
  {path:'listTrack', component:TrackListComponent},
  {path:'edit/:id', component:TrackCreateComponent},
  ]
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class TrackRoutingModule { }
