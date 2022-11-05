import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import Swal from 'sweetalert2';
import { Round } from '../round.model';

@Component({
  selector: 'app-round-list',
  templateUrl: './round-list.component.html',
  styleUrls: ['./round-list.component.scss']
})
export class RoundListComponent implements OnInit {

  IsAdmin !:boolean;
  IsInterviewer !:boolean;
  IsUser !:boolean;
  LoginedIn :boolean = false;

  selectRounds : Round[];
  searchText :any;

  @Input() round :Round;
  @Output() roundUpdated =new EventEmitter<Round>();
  constructor(private http : HttpClient,
    public formBuilder : FormBuilder) { }

    ngOnInit(): void {
      const role :any =localStorage.getItem('roles');
      if(role == "Admin"){
         this.IsAdmin =true;
         this.IsInterviewer=false;
         this.IsUser=false;
         this.LoginedIn=true;
      }else if (role=="Interviewer"){
        this.IsInterviewer= true;
        this.IsAdmin = false;
        this.IsUser=false;
        this.LoginedIn=true;
      }
      else if(role == "Trainee"){
        this.IsUser=true;
        this.IsInterviewer=false;
        this.IsAdmin=false;
        this.LoginedIn=true;
      }

      this.getRounds();
    }

    getRounds(){
      const headers = new HttpHeaders({
        Authorization :`Bearer ${localStorage.getItem('jwt')}`,
      });
    return this.http.get<any>('https://localhost:7115/api/Round/GetRounds',{headers:headers})
    .subscribe(data =>{
      this.selectRounds = data;
      console.log(this.selectRounds);
    })
  }

  getAllRounds(
    id:string,
    roundName:string,
    startDate:Date,
    endDate:Date,
    startAdmission:Date,
    endAdmission:Date,
    adminId:number,
    pageIndex:number,
    pageSize:number
  ): Observable <Round[]>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url=`https://localhost:7115/api/Round/GetAllRounds/pageIndex=${pageIndex}&pageSize=${pageSize}`
    if(id!="") url+=`&id=${id}`;
    if(roundName!="") url+=`&roundName=${roundName}`;
    if(startDate !=null) url+= `&startDate=${startDate}`;
    if(endDate !=null) url+= `&endDate=${endDate}`;
    if(startAdmission !=null) url+= `&startAdmission=${startAdmission}`;
    if(endAdmission !=null) url+= `&endAdmission=${endAdmission}`;
    if(adminId !=0) url+= `&adminId=${adminId}`;
    return this.http.get<Round[]>(url,{headers:headers});
  }

  roundId:string ="";
  roundName:string ="";
  startDate :Date;
  endDate :Date;
  startAdmission :Date;
  endAdmission:Date;
  adminId:number;
  _pageIndex =1;
  _pageSize=20;
  selectedrounds : Round[];

  FilterRounds(){
    this.getAllRounds(
      this.roundId,
      this.roundName,
      this.startDate,
      this.endDate,
      this.startAdmission,
      this.endAdmission,
      this.adminId,
      this._pageIndex,
      this._pageSize
    ).subscribe((result:any)=>
    {
      this.selectedrounds=result.values;
    })
  }

  public deleteRound(roundId:string ){
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url ="https://localhost:7115/api/Round/DeleteRound";
    if(roundId!="")
      url +=`?id=${roundId}`

      return this.http.delete<Round>(url,{headers:headers});

  }

  onDeleteRound(roundId:string) {
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
          this.deleteRound(roundId)
            .subscribe((_round)=> {
              this.roundUpdated.emit(_round);
              this.getRounds()
            });
            //!===============
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Round has been deleted.',
            'success'
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Round is safe :)',
            'error'
          );
        }
      }
      );
  }


  filteration: any | undefined = {} ;

  Reset(){
    this.filteration= {};
    this.FilterRounds();
  }

  isTokenExpired: any;
  isUserAuthenticated(){
    let token : string |null ;
  token = localStorage.getItem("jwt");
    if(token && !this.isTokenExpired(token) ){
      return true;
    }
    else{
      return false;
    }
  }


  logOut(){
    localStorage.removeItem("jwt");
   }


}
