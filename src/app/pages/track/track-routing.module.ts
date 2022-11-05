import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { TrackCreateComponent } from './track-create/track-create.component';
import { TrackListComponent } from './track-list/track-list.component';
import { TrackDetailsComponent } from './track-details/track-details.component';



const routes:Routes =[
  {path:'createTrack', component:TrackCreateComponent},
  {path:'listTrack', component:TrackListComponent},
  {path:'edit/:id', component:TrackCreateComponent},
  {path:'detailsTrack/:id',component:TrackDetailsComponent},
  {path:'' , redirectTo:'listTrack', pathMatch:'full'}
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
