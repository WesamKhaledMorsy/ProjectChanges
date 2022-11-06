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



  StudentId :string;
  isAddMode :boolean;

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
      this.IsUser=true;
      this.IsInterviewer=false;
      this.IsAdmin=false;
      this.LogedIn=false;
    }

    this.route.paramMap.subscribe((params)=>{
      const id = params.get("id");

      this.StudentId=id;
      this.isAddMode =! id;
      if(id)
      {
      this.studentServices.getStudentById(id).subscribe((result)=>{
        debugger

          this.studentInput.studentName=result[0].studentName;
          this.studentInput.phoneNumber=result[0].phoneNumber;
          this.studentInput.email=result[0].email;
          this.studentInput.universityId=result[0].universityId;
          this.studentInput.universityName=result[0].universityName;
          this.studentInput.graduationYear=result[0].graduationYear;
          this.studentInput.gradeId=result[0].gradeId;
          this.studentInput.gradeValue=result[0].gradeValue;
          this.studentInput.statusId=result[0].statusId;
          this.studentInput.statusName=result[0].statusName;
          this.studentInput.roundId=result[0].roundId;
          this.studentInput.roundName=result[0].roundName;
          this.studentInput.trackId=result[0].trackId;
          this.studentInput.trackName=result[0].trackName;
          this.studentInput.interviewId=result[0].interviewId;
          this.studentInput.interviewName=result[0].interviewName;
          this.studentInput.interviewerId=result[0].interviewerId;
          this.studentInput.interviewerName=result[0].interviewerName;
          this.studentInput.userName=result[0].userName;
          debugger
          console.log(result);
        })

       }else if(id == ""){
        debugger
        this.studentInput.id = guid();
        let id =this.studentInput.id ;
        this.studentServices.getStudentById(id.toString()).subscribe((result)=>{
          debugger

          this.studentInput.studentName=result[0].studentName;
          this.studentInput.phoneNumber=result[0].phoneNumber;
          this.studentInput.email=result[0].email;
          this.studentInput.universityId=result[0].universityId;
          this.studentInput.universityName=result[0].universityName;
          this.studentInput.graduationYear=result[0].graduationYear;
          this.studentInput.gradeId=result[0].gradeId;
          this.studentInput.gradeValue=result[0].gradeValue;
          this.studentInput.statusId=result[0].statusId;
          this.studentInput.statusName=result[0].statusName;
          this.studentInput.roundId=result[0].roundId;
          this.studentInput.roundName=result[0].roundName;
          this.studentInput.trackId=result[0].trackId;
          this.studentInput.trackName=result[0].trackName;
          this.studentInput.interviewId=result[0].interviewId;
          this.studentInput.interviewName=result[0].interviewName;
          this.studentInput.interviewerId=result[0].interviewerId;
          this.studentInput.interviewerName=result[0].interviewerName;
          this.studentInput.userName=result[0].userName;
          debugger
         console.log(result);
       })
            }
    });



    // for (let index = 0; index < this.getStudents.length; index++) {
    //   let numbers =0;
    //  numbers =this.studentsNumber+1;
    // this.studentsNumber = numbers;

    // console.log(numbers);
    // }
    //  this.studentsNumber;

    this.getStudents();
    this.GetStudentNumber();
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
  if(this.IsUser){
    this.modalService.open(this.content, { centered: true });

  }
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
    //localStorage.removeItem('users');
    //localStorage.removeItem('currentUser');
    this.LogedIn= true;
  }
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

  GetAllStudentData(){
    this._GetAllStudentData().subscribe((result : any)=> {

      this.rounds=result.rounds;
      this.tracks=result.tracks;
      this.universities=result.universities;
      this.grades=result.grades;
      this.genders=result.genders;
      this.statuses=result.statuses;
     // this.documents=result.documents;
      this.interviews=result.interviews;
      debugger
    });

  }
  sum:Student[];
  GetStudentNumber(){
   //let studNum = this.sum.length;
   
    // const headers = new HttpHeaders({
    //   Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    // });
    // let url ="https://localhost:7115/api/Student/StudentNumber";
    // return this.http.get<any>(url,{headers:headers});

// this.sum =this.students;

if(this.sum != null){
  //return this.getStudents.length;
  for(let i=0 ; i<= this.sum.length; i++){
   let number;
   number +=1;
   console.log(number);
   return number;
  }
  return number;

}
  //   if( this.sum <= this.getStudents.length)
  //   {
  //   this.sum += 1;
  //   debugger
  //   return  this.sum;
  // }
  // return this.getStudents.length;
  }

}
