import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { emailSentBarChart, monthlyEarningChart } from './data';
import { ChartType } from './dashboard.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from '../../../core/services/event.service';

import { ConfigService } from '../../../core/services/config.service';
import { Student } from '../../student/student.model';
import { Round } from '../../round/round.model';
import { Track } from '../../track/track.model';
import { Interviewer } from '../../interviewer/interviewer.model';
import { User } from 'src/app/core/models/auth.models';
import { StudentService } from '../../student/student.service';
import { ActivatedRoute } from '@angular/router';
import { guid } from '@fullcalendar/angular';
import { Interview } from '../../interview/interview.model';
import { StudentListComponent } from '../../student/student-list/student-list.component';
import { Observable } from 'rxjs/internal/Observable';
import { Grade } from '../../grade/grade.model';
import { University } from '../../university/university.model';
import { Gender } from '../../gender/gender.model';
import { Status } from '../../status/status.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { number } from 'echarts';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  LogedIn : boolean = false;
  IsAdmin !:boolean;
  IsInterviewer !:boolean;
  IsUser !:boolean;
  isVisible: string;

  emailSentBarChart: ChartType;
  monthlyEarningChart: ChartType;
  transactions: Array<[]>;
  statData: Array<[]>;

  isActive: string;

  studentDetails :Student[];
  rounds : Round[] ;
  tracks :Track[];
  students: Student[]=[];
  interviewer : Interviewer[];
  interviews: Interview[];
  users:User[];

  grades : Grade[];
  universities :University[];
  genders :Gender[];
  statuses : Status[];

  submitted = false;
  // Table data
  //content?: any;
  grids?: any;

  StudentId :string;
  isAddMode :boolean;

  user:User;

  @Input() studentInput : Student = new Student();
  @Output() studentUpdated = new EventEmitter<Student[]>();

  @ViewChild('content') content;
  constructor(private modalService: NgbModal,
     private configService: ConfigService,
     private eventService: EventService,
     private studentServices :StudentService,
private http:HttpClient ,
    private route:ActivatedRoute) {
  }

  // roundNumber =this.rounds.length;
  // interviewersNumber= this.interviewer.length;
  studentsNumber:number=0;
  //   interviewNumber=this.interviews.length;

  ngOnInit() {
    const role :any =localStorage.getItem('roles');
    if(role== "Admin"){
       this.IsAdmin =true;
       this.IsInterviewer=false;
       this.IsUser=false;
       this.LogedIn=false;
    }else if (role=="Interviewer"){
      this.IsInterviewer= true;
      this.IsAdmin = false;
      this.IsUser=false;
      this.LogedIn=false;
    }
    else if(role == "Trainee"){
      debugger
      this.IsUser=true;
      this.IsInterviewer=false;
      this.IsAdmin=false;
      this.LogedIn=false;
      debugger
    }

    this.getStudents();
    this.getTracks();
    this.GetStudentByUserName(this.username);
    this._GetStudentByUserName();
    this.getStudentByUserId(this.userId);
     this._getStudentByUserId();
     this.GetAllInterviewerData();
     this.getStudentAccepted();
     this.getStudentRejected();
     this.getStudentWaiting();

    /**
     * horizontal-vertical layput set
     */
     const attribute = document.body.getAttribute('data-layout');

     this.isVisible = attribute;
     const vertical = document.getElementById('layout-vertical');
     if (vertical != null) {
       vertical.setAttribute('checked', 'true');
     }
     if (attribute == 'horizontal') {
       const horizontal = document.getElementById('layout-horizontal');
       if (horizontal != null) {
         horizontal.setAttribute('checked', 'true');
         console.log(horizontal);
       }
     }

    /**
     * Fetches the data
     */
    this.fetchData();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.openModal();
    }, 2000);
  }

  /**
   * Fetches the data
   */
  private fetchData() {
    this.emailSentBarChart = emailSentBarChart;
    this.monthlyEarningChart = monthlyEarningChart;

    this.isActive = 'year';
    this.configService.getConfig().subscribe(data => {
      this.transactions = data.transactions;
      this.statData = data.statData;
    });
  }

  openModal() {
  if(this.LogedIn){
    this.modalService.open(this.content, { centered: true });

  }
  this.submitted = false;
    // this.modalService.open(this.content, { size: 'md', centered: true });
  }

  weeklyreport() {
    this.isActive = 'week';
    this.emailSentBarChart.series =
      [{
        name: 'Series A',
         data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
      }, {
        name: 'Series B',
        data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
      }, {
        name: 'Series C',
        data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
      }];
  }

  monthlyreport() {
    this.isActive = 'month';
    this.emailSentBarChart.series =
      [{
        name: 'Series A',
         data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
      }, {
        name: 'Series B',
        data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
      }, {
        name: 'Series C',
        data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
      }];
  }

  yearlyreport() {
    this.isActive = 'year';
    this.emailSentBarChart.series =
      [{
        name: 'Series A',
         data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
      }, {
        name: 'Series B',
        data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
      }, {
        name: 'Series C',
        data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
      }];
  }


  /**
   * Change the layout onclick
   * @param layout Change the layout
   */
   changeLayout(layout: string) {
    this.eventService.broadcast('changeLayout', layout);
  }

  Logout(){
    localStorage.removeItem('jwt');
    localStorage.removeItem('roles');
    localStorage.removeItem('users');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    this.LogedIn= true;
  }


  totalStudent:number;
  selectStudent : Student[];

  getStudents(){
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    return this.http.get<any>('https://localhost:7115/api/Student/GetStudents'
    ,{
      headers:headers
    })
    .subscribe(data =>{
      this.selectStudent = data;
      this.totalStudent=this.selectStudent.length;
      console.log(this.selectStudent);
      console.log(this.selectStudent.length);
    })
  }

  _GetAllStudentData():Observable<any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url ="https://localhost:7115/api/Student/GetAllStudentData";
    return this.http.get<any>(url,{headers:headers});

  }

  StudentsWaiting:Student[];
  StudentsWaitingNumber:number;
  StudentsAccepted:Student[];
  acceptedNumber: Number;
  StudentRejected:Student[];
  rejectedStudents:Number;
  _GetStudentAccepted():Observable<any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url ="https://localhost:7115/api/Student/GetStudentsAccepted";
    return this.http.get<any>(url,
      {headers:headers}
      )
  }
  getStudentAccepted(){
    this._GetStudentAccepted().subscribe(data =>{
      this.StudentsAccepted=data;
      this.acceptedNumber=this.StudentsAccepted.length;
      debugger
    })
  }
  _GetStudentWaiting():Observable<any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url ="https://localhost:7115/api/Student/GetStudentsWaitingForInterview";
    return this.http.get<any>(url,
      {headers:headers}
      )
  }
  getStudentWaiting(){
    this._GetStudentWaiting().subscribe(data =>{
      this.StudentsWaiting=data;
      this.StudentsWaitingNumber=this.StudentsWaiting.length;
      debugger
    })
  }


  _GetStudentRejected():Observable<any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url ="https://localhost:7115/api/Student/GetStudentsRejected";
    return this.http.get<any>(url,{headers:headers});
  }

  getStudentRejected(){
    this._GetStudentRejected().subscribe(data =>{
      this.StudentRejected=data;
      this.rejectedStudents=this.StudentRejected.length;
      debugger
    })
  }

  GetAllStudentData(){
    this._GetAllStudentData().subscribe((result : any)=> {

      this.rounds=result.rounds;
      this.tracks=result.tracks;
      this.universities=result.universities;
      this.grades=result.grades;
      this.genders=result.genders;
      this.statuses=result.statuses;
     //this.documents=result.documents;
      this.interviews=result.interviews;
      debugger
    });

  }

  userId :string = localStorage.getItem('userId');
  public getStudentByUserId(id:string) : Observable <any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url="https://localhost:7115/api/Student/GetStudentByUserId";
    if (id!="")
      url += `?id=${id}`
      console.log(id);
    return this.http.get<Student>(
      url,{headers:headers}
    );
  }
  StudstatusName :string ;
  StudinterviewDate:string;
  roundId:string;
  _getStudentByUserId(){
    this.getStudentByUserId(this.userId).subscribe(data=>{
      this.userId=data[0].userId;
      this.StudstatusName=data[0].statusName;
      this.studentInput.interviewDate=data[0].interviewDate;
      this.studentInput.roundId=data[0].roundId;
      console.log(this.StudstatusName,this.StudinterviewDate);
      debugger
      return this.StudstatusName , this.StudinterviewDate;
  })
}
username :string = localStorage.getItem('userName')
   GetStudentByUserName(userName:string) : Observable <any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });

    let url="https://localhost:7115/api/Student/GetStudentByUserName";
    if (userName!="")
      url += `?username=${userName}`
      console.log(userName);
      debugger
    return this.http.get<Student>(
      url,{headers:headers}
    );

  }


  statusName :string ;
  interviewDate:string;
_GetStudentByUserName(){
  this.GetStudentByUserName(this.username).subscribe(data=>{
   this.statusName=data[0].statusName;
   this.interviewDate=data[0].interviewDate;
   this.roundId=data[0].roundId;
    console.log(this.statusName,this.interviewDate);
  })
}


  selectTracks : Track[];
  getTracks(){
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
  return this.http.get<any>('https://localhost:7115/api/Track/GetTracks' ,{headers:headers})
  .subscribe(data =>{
    this.selectTracks = data;
    console.log(this.selectTracks);
    console.log(data)
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


//interviews : Interview[];
 // rounds : Round[];
 interviewerName : string = localStorage.getItem('userName');
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
