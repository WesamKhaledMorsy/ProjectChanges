import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import Swal from 'sweetalert2';
import { Interview } from '../../interview/interview.model';
import { Interviewer } from '../../interviewer/interviewer.model';
import { Round } from '../../round/round.model';
import { Student } from '../../student/student.model';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.scss']
})
export class InterviewListComponent implements OnInit {
  IsAdmin !:boolean;
  IsInterviewer !:boolean;
  IsUser !:boolean;
  LoggedIn : boolean = false;

  selectInterviews : Interview[];
  searchText :any;

  @Input() interview :Interview;
  @Output() interviewUpdated =new EventEmitter<Interview>();
  constructor(private http : HttpClient,
    public formBuilder : FormBuilder) { }

  ngOnInit(): void {

    const role :any =localStorage.getItem('roles');
    if(role== "Admin"){
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
    this.getInterviews();
    this._GetAllInterviewData();
  }
  students :Student[];
  getInterviews(){
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    return this.http.get<any>('https://localhost:7115/api/Interview/GetInterviews'
    ,{
      headers:headers
    })
    .subscribe(data =>{
      this.selectInterviews = data;

      console.log(this.selectInterviews);
    })
  }

  getAllInterviews(
    id:string,
    interviewName:string,
    startDate:Date,
    endDate:Date,
    roundId:number,
    adminId:number,
    pageIndex:number,
    pageSize:number
  ): Observable <Interview[]>{

    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url=`https://localhost:7115/api/Interview/GetAllInterviews/pageIndex=${pageIndex}&pageSize=${pageSize}`
    if(id!="") url+=`&id=${id}`;
    if(interviewName!="") url+=`&roundName=${interviewName}`;
    if(startDate !=null) url+= `&startDate=${startDate}`;
    if(endDate !=null) url+= `&endDate=${endDate}`;
    if(roundId!=0) url+=`&roundId=${roundId}`;
    if(adminId !=0) url+= `&adminId=${adminId}`;
    return this.http.get<Interview[]>(url,{headers:headers});
  }

  interviewId:string ="";
  interviewName:string ="";
  startDate :Date;
  endDate :Date;
  roundId:number;
  adminId:number;
  _pageIndex =1;
  _pageSize=20;
  selectedinterviews : Interview[];

  FilterInterviews(){
    this.getAllInterviews(
      this.interviewId,
      this.interviewName,
      this.startDate,
      this.endDate,
      this.roundId,
      this.adminId,
      this._pageIndex,
      this._pageSize
    ).subscribe((result:any)=>
    {
      this.selectedinterviews=result.values;
    })
  }

  public deleteInterview(interviewId:string){
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url ="https://localhost:7115/api/Interview/DeleteInterview";
    if(interviewId !="")
      url +=`?id=${interviewId}`

      return this.http.delete<Interview>(url,{headers:headers});

  }

  onDeleteInterview(interviewId:string) {
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
          this.deleteInterview(interviewId)
            .subscribe((_interview)=> {
              this.interviewUpdated.emit(_interview);
              this.getInterviews()
            });
            //!===============
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Interview has been deleted.',
            'success'
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Interview is safe :)',
            'error'
          );
        }
      }
      );
  }


  filteration: any | undefined = {} ;

  Reset(){
    this.filteration= {};
    this.FilterInterviews();
  }

  interviewers : Interviewer[];
  rounds : Round[];

  _GetAllInterviewData():Observable<any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url ="https://localhost:7115/api/Interview/GetInterviewsData";
    return this.http.get<any>(url,{headers:headers});
  }

  GetAllInterviewerData(){
    this._GetAllInterviewData().subscribe((result : any)=> {

      this.interviewers=result.interviewers;
      debugger
    });

  }
}


