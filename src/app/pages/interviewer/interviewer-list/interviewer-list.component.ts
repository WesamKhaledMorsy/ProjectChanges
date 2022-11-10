import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import Swal from 'sweetalert2';
import { Interview } from '../../interview/interview.model';
import { Round } from '../../round/round.model';
import { Student } from '../../student/student.model';
import { Interviewer } from '../interviewer.model';

@Component({
  selector: 'app-interviewer-list',
  templateUrl: './interviewer-list.component.html',
  styleUrls: ['./interviewer-list.component.scss']
})
export class InterviewerListComponent implements OnInit {
  IsAdmin !:boolean;
  IsInterviewer !:boolean;
  IsUser !:boolean;
  LoggedIn : boolean = false;

  selectInterviewers : Interviewer[];
  searchText :any;

  @Input() interviewer :Interviewer;
  @Output() interviewerUpdated =new EventEmitter<Interviewer>();

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

    this.getinterviewers();
    this.GetAllInterviewerData();
  }

  students :Student[];

  getinterviewers(){
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    return this.http.get<any>('https://localhost:7115/api/Interviewer/GetInterviewers',
    {headers:headers})
    .subscribe(data =>{
      debugger
      this.selectInterviewers = data;
      for (let index = 0; index < this.selectInterviewers.length; index++) {

          this.students= data[index].students[index].studentName;
          console.log(this.students)
      }
      this.students=data.students;
      console.log(this.selectInterviewers);
    })
  }

  getAllInterviewers(
    id:string,
    interviewerName:string,
    startDate:Date,
    endDate:Date,
    roundId:number,
    adminId:number,
    pageIndex:number,
    pageSize:number
  ): Observable <Interviewer[]>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url=`https://localhost:7115/api/Interviewer/GetAllInterviewers/pageIndex=${pageIndex}&pageSize=${pageSize}`
    if(id!="") url+=`&id=${id}`;
    if(interviewerName!="") url+=`&roundName=${interviewerName}`;
    if(startDate !=null) url+= `&startDate=${startDate}`;
    if(endDate !=null) url+= `&endDate=${endDate}`;
    if(roundId!=0) url+=`&roundId=${roundId}`;
    if(adminId !=0) url+= `&adminId=${adminId}`;

    return this.http.get<Interviewer[]>(url,{headers:headers});
  }

  interviewerId:string;
  interviewerName:string ="";
  startDate :Date;
  endDate :Date;
  roundId:number;
  adminId:number;
  _pageIndex =1;
  _pageSize=20;
  selectedinterviewers : Interviewer[];

  FilterInterviewers(){
    this.getAllInterviewers(
      this.interviewerId,
      this.interviewerName,
      this.startDate,
      this.endDate,
      this.roundId,
      this.adminId,
      this._pageIndex,
      this._pageSize
    ).subscribe((result:any)=>
    {

      this.selectedinterviewers=result.values;
    })
  }

  public deleteInterviewer(interviewerId:string){
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url ="https://localhost:7115/api/Interviewer/DeleteInterviewer";
    if(interviewerId !="")
      url +=`?id=${interviewerId}`

      return this.http.delete<Interviewer>(url,{headers:headers});

  }

  onDeleteInterviewer(interviewerId:string) {
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
          this.deleteInterviewer(interviewerId)
            .subscribe((_interviewer)=> {
              this.interviewerUpdated.emit(_interviewer);
              this.getinterviewers()
            });
            //!===============
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Interviewer has been deleted.',
            'success'
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Interviewer is safe :)',
            'error'
          );
        }
      }
      );
  }


  filteration: any | undefined = {} ;

  Reset(){
    this.filteration= {};
    this.FilterInterviewers();
  }

  interviews : Interview[];
  rounds : Round[];
  student:Student[];
  _GetAllInterviewerData():Observable<any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    debugger
    let url ="https://localhost:7115/api/Interviewer/GetInterviewersData";
    return this.http.get<any>(url,{headers:headers});
  }

  GetAllInterviewerData(){
    this._GetAllInterviewerData().subscribe((result : any)=> {

      this.interviews=result.interviews;
      this.students=result.students;
      debugger
    });

  }
}


