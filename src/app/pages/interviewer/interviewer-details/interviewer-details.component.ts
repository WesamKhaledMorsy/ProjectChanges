import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Interview } from '../../interview/interview.model';
import { Round } from '../../round/round.model';
import { Status } from '../../status/status.model';
import { Student } from '../../student/student.model';
import { Interviewer } from '../interviewer.model';
import { InterviewerService } from '../interviewer.service';

@Component({
  selector: 'app-interviewer-details',
  templateUrl: './interviewer-details.component.html',
  styleUrls: ['./interviewer-details.component.scss']
})
export class InterviewerDetailsComponent implements OnInit {

statuses:Status[];
  editMode :boolean =false;  //? write editMode to check if we are in edit mode or Add mode
  isAddMode : boolean;        //?  write AddMode to check if we are in edit mode or Add mode
  InterviewerId :string;

  IsAdmin !:boolean;
  IsInterviewer !:boolean;
  IsUser !:boolean;
  LoggedIn :boolean = false;
  @Input() interviewerInput : Interviewer = new Interviewer();
  @Output() interviewerUpdated= new EventEmitter <Interviewer[]>();
  constructor(private http : HttpClient,
    public formBuilder : FormBuilder,
    public router:Router,
    private interviewerServices : InterviewerService ,
     private route:ActivatedRoute,) { }

interviewerName : string = localStorage.getItem('userName');
userid: string = localStorage.getItem('userId');
Counter:number;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      const id =params.get("id");
      this.InterviewerId=id;
      this.isAddMode =! id;
      if(id)
    {
      this.interviewerServices.getInterviewerById(id).subscribe((result)=>{

        debugger
        this.interviewerInput.interviewerName=result[0].interviewerName;
        this.interviewerInput.startDate=this.formatDate(result[0].startDate);
        this.interviewerInput.endDate=this.formatDate(result[0].endDate);
        // this.interviewerInput.studentId=result[0].studentId;
        // this.interviewerInput.studentName=result[0].studentName;
        // this.interviewerInput.interviewId=result[0].interviewId;
        // this.interviewerInput.interviewName=result[0].interviewName;
        this.interviewerInput.students=result[0].students;
        this.interviewerInput.adminId=result[0].adminId;  //
        console.log(result);
      }
    );
  }
  this.GetStudentByInterviewerId();
  this._GetStudentByInterviewerId(this.userid);
  this.FilterStudents();
  this.getStudents();
  this.Counter= 20;
})}
  formatDate(date: string | number | Date) {
    var d = new Date(date),
      day = "" + d.getDate(),
      month = "" + (d.getMonth() + 1),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  }

  interviews : Interview[];
  rounds : Round[];
 students:Student[];
 _GetStudentByInterviewerId(id: string):Observable<any>{
//  interviewerName=this.interviewerName;
id=this.userid;
   const headers = new HttpHeaders({
     Authorization :`Bearer ${localStorage.getItem('jwt')}`,
   });
   console.log(id)
   debugger
   let url =`${environment.apiUrl}/api/Student/GetStudentByInterviewerId`;
   return this.http.get<any>(url,{headers:headers});
 }

 GetStudentByInterviewerId(){
  this._GetStudentByInterviewerId(this.InterviewerId).subscribe(
    (data)=>{
      data.students;
      console.log(data.students);
    }
  )
 }
//  GetStudentByInterviewerId(){
//    this._GetStudentByInterviewerId(this.InterviewerId).subscribe((result : any)=> {

//      this.interviews=result.interviews;
//      this.students=result.students;
//      debugger
//    });

//  }
SelectedStudnets :Student[];
selectStudent:Student[];
getStudents(){

  const headers = new HttpHeaders({
    Authorization :`Bearer ${localStorage.getItem('jwt')}`,
  });
  return this.http.get<any>(`${environment.apiUrl}/api/Student/GetStudents`
  ,{
    headers:headers
  })
  .subscribe(data =>{
    this.selectStudent = data;

    console.log(this.selectStudent);
  })
}
getAllStudents(
  id:string,
  studentName:string,
  status:string,
  adminId:string,
  pageIndex:number,
  pageSize:number
): Observable <Student[]>{
  const headers = new HttpHeaders({
    Authorization :`Bearer ${localStorage.getItem('jwt')}`,
  });
  let url=`${environment.apiUrl}/api/Student/GetAllStudents/pageIndex=${pageIndex}&pageSize=${pageSize}`
  if(id!="") url+=`&id=${id}`;
  if(studentName!="") url+=`&name=${studentName}`;
  if(status !="") url+= `&status=${status}`;
  if(adminId !="") url+= `&adminId=${adminId}`;
  return this.http.get<Student[]>(url,{headers:headers});
}

studentId:string ;
  studentName:string ;
  statusName:string;
  email:string;
  adminId:string;
  _pageIndex =1;
  _pageSize=20;
  selectedStudents : Student[];

  FilterStudents(){
    this.getAllStudents(
      this.studentId,
      this.studentName,
      this.statusName,
      this.adminId,
      this._pageIndex,
      this._pageSize
    ).subscribe((result:any)=>
    {
      this.selectedStudents=result.values;
    })
  }

  filteration: any | undefined = {} ;

  Reset(){
    this.filteration= {};
    this.FilterStudents();
  }
}
