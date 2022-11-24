import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { guid } from '@fullcalendar/angular';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Interview } from '../../interview/interview.model';
import { Student } from '../../student/student.model';
import { Interviewer } from '../interviewer.model';
import { InterviewerService } from '../interviewer.service';

@Component({
  selector: 'app-interviewer-create',
  templateUrl: './interviewer-create.component.html',
  styleUrls: ['./interviewer-create.component.scss']
})
export class InterviewerCreateComponent implements OnInit {

  interviewerData :Interviewer[];

  interviews : Interview[];
  students : Student[];

  newtInterviewer :Interviewer;
  editMode :boolean =false;  //? write editMode to check if we are in edit mode or Add mode
  isAddMode : boolean;        //?  write AddMode to check if we are in edit mode or Add mode
  InterviewerId :string;

  IsAdmin !:boolean;
  IsInterviewer !:boolean;
  IsUser !:boolean;
  LoggedIn :boolean = false;

   @Input() interviewerInput : Interviewer = new Interviewer();
   @Output() interviewerUpdated= new EventEmitter <Interviewer[]>();

   @Input() fromDate: Date;
   @Input() toDate: Date;
   @Output() dateRangeSelected: EventEmitter<{}> = new EventEmitter();
   @ViewChild('dp', { static: true }) datePicker: any;
   constructor(private http :HttpClient,
     private interviewerServices : InterviewerService ,
     private route:ActivatedRoute,
     private router:Router
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
  // Catch the Id from  URL
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
      this.interviewerInput.adminId=result[0].adminId;  //
      console.log(result);
    }
  );
  }
  });
  this.GetAllInterviewerData();
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
    let interviewer = new Interviewer();
      // interviewer.id =guid();
      interviewer.interviewerName = form.value.interviewerName;
      interviewer.startDate = form.value.startDate;
      interviewer.endDate = form.value.endDate;
      // interviewer.studentId=form.value.studentId;
      // interviewer.studentName=form.value.studentName;
      // interviewer.interviewId=form.value.interviewId;
      // interviewer.interviewName=form.value.interviewName;
      //interviewer.roundId=form.value.roundId;
       interviewer.adminId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
      debugger
    this.http.post<any>
      (`${environment.apiUrl}/api/Interviewer/CreateNewInterviewer`,interviewer
      ,{headers:headers}).subscribe(data => {
        console.log(data)

        //!==
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Interviewer created Successfully',
        showConfirmButton: false,
        timer: 1500
      });
    //!==
    })
    this.router.navigate(['/interviewer/listInterviewer']);

  }
  else{
    this.interviewerInput.id=this.InterviewerId;
    this.interviewerServices.UpdateInterviewer(this.interviewerInput)
        .subscribe((UpInterviewer)=>{
        this.interviewerUpdated.emit(UpInterviewer);
    }, )

    //!==
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Interviewer Updated Successfully',
      showConfirmButton: false,
      timer: 1500
    });
  //!==
  }
  this.router.navigate(['/interviewer/listInterviewer']);
      form.reset(this.interviewerInput);
}

_GetAllInterviewerData():Observable<any>{
  const headers = new HttpHeaders({
    Authorization :`Bearer ${localStorage.getItem('jwt')}`,
  });
  let url =`${environment.apiUrl}/api/Interviewer/GetInterviewersData`;
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


