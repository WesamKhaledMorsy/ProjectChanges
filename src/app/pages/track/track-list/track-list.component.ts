import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import Swal from 'sweetalert2';
import { Round } from '../../round/round.model';
import { Track } from '../track.model';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {
  IsAdmin !:boolean;
  IsInterviewer !:boolean;
  IsUser !:boolean;
  LoggedIn :boolean = false;

  selectTracks : Track[];
  searchText :any;

  @Input() track :Track;
  @Output() trackUpdated =new EventEmitter<Track>();
  constructor(private http : HttpClient,
    public formBuilder : FormBuilder) { }

    ngOnInit(): void {
      const role :any =localStorage.getItem('roles');
      if(role == "Admin"){
         this.IsAdmin =true;
         this.IsInterviewer=false;
         this.IsUser=false;
         this.LoggedIn=true;
      }else if (role=="Interviewer"){
        this.IsInterviewer= true;
        this.IsAdmin = false;
        this.IsUser=false;
        this.LoggedIn=true;
      }
      else if(role == "Trainee"){
        this.IsUser=true;
        this.IsInterviewer=false;
        this.IsAdmin=false;
        this.LoggedIn=true;
      }
      this.getTracks();
      this.GetAllTrackData();
    }

    getTracks(){
      const headers = new HttpHeaders({
        Authorization :`Bearer ${localStorage.getItem('jwt')}`,
      });
    return this.http.get<any>('https://localhost:7115/api/Track/GetTracks' ,{headers:headers})
    .subscribe(data =>{
      this.selectTracks = data;
      console.log(this.selectTracks);
    })
  }

  getAllTracks(
    id:number,
    trackName:string,
    startDate:Date,
    endDate:Date,
    roundId:number,
    adminId:number,
    pageIndex:number,
    pageSize:number
  ): Observable <Track[]>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url=`https://localhost:7115/api/Track/GetAllTracks/pageIndex=${pageIndex}&pageSize=${pageSize}`
    if(id!=0) url+=`&id=${id}`;
    if(trackName!="") url+=`&roundName=${trackName}`;
    if(startDate !=null) url+= `&startDate=${startDate}`;
    if(endDate !=null) url+= `&endDate=${endDate}`;
    if(roundId!=0) url+=`&roundId=${roundId}`;
    if(adminId !=0) url+= `&adminId=${adminId}`;
    return this.http.get<Track[]>(url,{headers:headers});
  }

  trackId:number =0;
  trackName:string ="";
  startDate :Date;
  endDate :Date;
  roundId:number;
  adminId:number;
  _pageIndex =1;
  _pageSize=20;
  selectedTracks : Track[];

  FilterTracks(){
    this.getAllTracks(
      this.trackId,
      this.trackName,
      this.startDate,
      this.endDate,
      this.roundId,
      this.adminId,
      this._pageIndex,
      this._pageSize
    ).subscribe((result:any)=>
    {
      this.selectedTracks=result.values;
    })
  }

  public deleteTrack(trackId:number){
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url ="https://localhost:7115/api/Track/DeleteTrack";
    if(trackId!=0)
      url +=`?id=${trackId}`

      return this.http.delete<Track>(url,{headers:headers});

  }

  onDeleteTrack(trackId:number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ms-2'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: 'You wont be able to revert this!',
        icon: 'question',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        showCancelButton: true
      })
      .then(result => {
        if (result.value) {
          //!main code for delete
          this.deleteTrack(trackId)
            .subscribe((_track)=> {
              this.trackUpdated.emit(_track);
              this.getTracks()
            });
            //!===============
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Track has been deleted.',
            'success'
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Track is safe :)',
            'error'
          );
        }
      }
      );
  }


  filteration: any | undefined = {} ;

  Reset(){
    this.filteration= {};
    this.FilterTracks();
  }

  rounds : Round[];

  _GetAllTrackData():Observable<any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url ="https://localhost:7115/api/Track/GetAllTrackData";
    return this.http.get<any>(url,{headers:headers});
  }

  GetAllTrackData(){
    this._GetAllTrackData().subscribe((result : any)=> {

      this.rounds=result.rounds;
      debugger
    });

  }
}
