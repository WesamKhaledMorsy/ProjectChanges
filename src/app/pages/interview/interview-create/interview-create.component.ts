import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { guid } from '@fullcalendar/angular';
import { Observable } from 'rxjs/internal/Observable';
import Swal from 'sweetalert2';
import { Interviewer } from '../../interviewer/interviewer.model';
import { Round } from '../../round/round.model';
import { Student } from '../../student/student.model';
import { Interview } from '../interview.model';
import { InterviewService } from '../interview.service';

@Component({
  selector: 'app-interview-create',
  templateUrl: './interview-create.component.html',
  styleUrls: ['./interview-create.component.scss']
})
export class InterviewCreateComponent implements OnInit {
  interviewData :Interview[];

  interviewers : Interviewer[];
  students : Student[];
  rounds : Round[];

  newtInterview :Interview;
  editMode :boolean =false;  //? write editMode to check if we are in edit mode or Add mode
  isAddMode : boolean;        //?  write AddMode to check if we are in edit mode or Add mode
  InterviewId :string;

  IsAdmin !:boolean;
  IsInterviewer !:boolean;
  IsUser !:boolean;
  LoggedIn :boolean = false;

   @Input() interviewInput : Interview = new Interview();
   @Output() interviewUpdated= new EventEmitter <Interview[]>();

   @Input() fromDate: Date;
   @Input() toDate: Date;
   @Output() dateRangeSelected: EventEmitter<{}> = new EventEmitter();
   @ViewChild('dp', { static: true }) datePicker: any;
   constructor(private http :HttpClient,
     private interviewServices : InterviewService ,
     private route:ActivatedRoute,
     ) { }

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

    ///////////////////////////////
    this.route.paramMap.subscribe((params)=>{
      const id =params.get("id");
      this.InterviewId=id;
      this.isAddMode =! id;
      if(id)
    {
      this.interviewServices.getInterviewById(id.toString()).subscribe((result)=>{

        debugger
        this.interviewInput.interviewName=result[0].interviewName;
        this.interviewInput.startDate=this.formatDate(result[0].startDate);
        this.interviewInput.endDate=this.formatDate(result[0].endDate);

        //this.interviewInput.studentId=result[0].studentId;
        this.interviewInput.interviewerId=result[0].interviewerId;
        this.interviewInput.adminId=result[0].adminId;
        //this.interviewInput.roundId=result[0].roundId;
        console.log(result);
      }
    );
    }
    });
    this.GetAllInterviewData();
  }

  formatDate(date) {
    var d = new Date(date),
      day = "" + d.getDate(),
      month = "" + (d.getMonth() + 1),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  }

  onSubmit(form:NgForm){
    if(this.isAddMode){
      const headers = new HttpHeaders({
        Authorization :`Bearer ${localStorage.getItem('jwt')}`,
      });
      let interview = new Interview();
        //interview.id =guid().toString();
        interview.interviewName = form.value.interviewName;
        interview.startDate = form.value.startDate;
        interview.endDate = form.value.endDate;
       // interview.studentId=form.value.studentId;
       interview.startTime=form.value.startTime;
       interview.endTime=form.value.endTime;
        interview.interviewerId=form.value.interviewerId;
        interview.count=form.value.count;
        interview.adminId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
        debugger
      this.http.post<any>
        ('https://localhost:7115/api/Interview/CreateNewInterview',
        interview ,{headers:headers}).subscribe(data => {
          console.log(data)

          //!==
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Interview created Successfully',
          showConfirmButton: false,
          timer: 1500
        });
      //!==
      })


    }
    else{
      this.interviewInput.id=this.InterviewId;
      this.interviewServices.UpdateInterview(this.interviewInput)
          .subscribe((UpInterview)=>{
          this.interviewUpdated.emit(UpInterview);
      }, )

      //!==
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Interview Updated Successfully',
        showConfirmButton: false,
        timer: 1500
      });
    //!==
    }
        form.reset(this.interviewInput);
  }

  _GetAllInterviewData():Observable<any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url ="https://localhost:7115/api/Interview/GetInterviewsData";
    return this.http.get<any>(url,{headers:headers});
  }

  GetAllInterviewData(){
    this._GetAllInterviewData().subscribe((result : any)=> {

      this.interviewers=result.interviewers;
      this.students=result.students;
      //this.rounds=result.rounds;
      debugger
    });

  }
  }


