import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import Swal from 'sweetalert2';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { Grade } from '../../grade/grade.model';
import { University } from '../../university/university.model';
import { Gender } from '../../gender/gender.model';
import { Status } from '../../status/status.model';
import { Track } from '../../track/track.model';
import { Round } from '../../round/round.model';
import { Document } from '../../documents/document.model';
import { Interview } from '../../interview/interview.model';
import { Interviewer } from '../../interviewer/interviewer.model';
import { Options } from 'ng5-slider';
import { guid } from '@fullcalendar/angular';
import { __param } from 'tslib';
import { data } from 'jquery';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent implements OnInit {
 // bread crumb items
 breadCrumbItems: Array<{}>;

  students : Student[];

  editMode :boolean =false;  //? write editMode to check if we are in edit mode or Add mode
  isAddMode : boolean;        //?  write AddMode to check if we are in edit mode or Add mode
  StudentId :string;

  IsAdmin !:boolean;
  IsInterviewer !:boolean;
  IsUser !:boolean;
  LoggedIn :boolean = false;

   @Input() StudentInput : Student = new Student();
   @Output() studentUpdated= new EventEmitter <Student[]>();

   @Input() fromDate: Date;
   @Input() toDate: Date;
   @Output() dateRangeSelected: EventEmitter<{}> = new EventEmitter();
   @ViewChild('dp', { static: true }) datePicker: any;
   constructor(private http :HttpClient,
     private studentServices : StudentService ,
     private route:ActivatedRoute,
     ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Wizard', active: true }];
    debugger
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
      console.log(params.keys);
      const id = params.get("id");
      this.StudentId=id;
      this.isAddMode =! id;
      if(id)
    {
      debugger
      this.studentServices.getStudentById(id.toString()).subscribe((result)=>{

        debugger
        //this.universityInput.id=result.id;
        this.StudentInput.studentName=result[0].studentName;
       // this.StudentInput.email=result[0].email;
        this.StudentInput.phoneNumber=result[0].phoneNumber;
        this.StudentInput.graduationYear=result[0].graduationYear;
        this.StudentInput.statusId=result[0].statusId;
       // this.StudentInput.statusName=result[0].statusName;
        this.StudentInput.universityId=result[0].universityId;
        //this.StudentInput.universityName=result[0].universityName;
        this.StudentInput.studentGrade=result[0].studentGrade;
       //this.StudentInput.gradeValue=result[0].gradeValue;
       // this.StudentInput.adminId=result[0].adminId;
        this.StudentInput.roundId=result[0].roundId;
      // this.StudentInput.roundName=result[0].roundName;
        this.StudentInput.trackId=result[0].trackId;
      // this.StudentInput.trackName=result[0].trackName;
        this.StudentInput.genderId=result[0].genderId;
      // this.StudentInput.genderType=result[0].genderName;
        this.StudentInput.interviewerId=result[0].interviewerId;
        //this.StudentInput.interviewerName=result[0].interviewerName;
        this.StudentInput.interviewId=result[0].interviewId;
        //this.StudentInput.interviewName=result[0].interviewName;
        this.StudentInput.userId=result[0].userId;
        //this.StudentInput.userName=result[0].userName;
        console.log(result);
      }
    );
    }
    });
    this.GetAllStudentData();
    this.validate();
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

  _getStudentByUserId(){
    this.getStudentByUserId(this.userId).subscribe(data=>{
      this.userId=data[0].userId;
       console.log(data[0].statusName);
  })
}
userid :string =localStorage.getItem('userId');
username:string=localStorage.getItem('userName');
  onSubmit(form:NgForm){
    if(this.isAddMode){
      const headers = new HttpHeaders({
        Authorization :`Bearer ${localStorage.getItem('jwt')}`,
      });
      let student = new Student();
      //student.id=guid();
      student.studentName=form.value.studentName;
      student.userId=this.userid;
      student.userName=this.username;
      //student.email=form.value.email;
      student.genderId=form.value.genderId;
      //student.genderType=form.value.genderName;
      student.universityId=form.value.universityId;
      //student.universityName=form.value.universityName;
     // student.gradeId=form.value.gradeId;
      //student.gradeValue=form.value.gradeValue;
      student.studentGrade=form.value.studentGrade;
      student.roundId=form.value.roundId;
      //student.roundName=form.value.roundName;
      student.trackId=form.value.trackId;
      //student.trackName=form.value.trackName;
      student.graduationYear=form.value.graduationYear;
      student.phoneNumber=form.value.phoneNumber;
      student.statusId=form.value.statusId;
      //student.statusName=form.value.statusName;
    student.interviewerId=form.value.interviewerId;
      //student.interviewerName=form.value.interviewerName;
  //student.interviewId=form.value.interviewId;
      //student.interviewName=form.value.interviewName;
      student.adminId="3fa85f64-5717-4562-b3fc-2c963f66afa6";
        debugger
      this.http.post<any>
        ('https://localhost:7115/api/Student/CreateNewStudent',
        student ,{headers:headers}).subscribe(data => {
          console.log(data)

          //!==
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Student created Successfully',
          showConfirmButton: false,
          timer: 1500
        });
      //!==
      })


    }
    else{
      debugger
      this.StudentInput.id=this.StudentId;
      this.studentServices.UpdateStudent(this.StudentInput)
          .subscribe((UpStudent)=>{
          this.studentUpdated.emit(UpStudent);
      }, )

      //!==
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Student Updated Successfully',
        showConfirmButton: false,
        timer: 1500
      });
    //!==
    }
        form.reset(this.StudentInput);
  }

  _GetAllStudentData():Observable<Student>{
    const headers = new HttpHeaders({
    Authorization :`Bearer ${localStorage.getItem('jwt')}`,
  });
    let url ="https://localhost:7115/api/Student/GetAllStudentData";
    return this.http.get<any>(url,{headers:headers});
  }
   documents : Document[];
  grades : Grade[];
  universities :University[];
  genders :Gender[];
  statuses : Status[];
  tracks :Track[];
  rounds :Round[];
  interviews: Interview[];
  interviewers:Interviewer[];

  GetAllStudentData(){
    debugger
    this._GetAllStudentData().subscribe((result : any)=> {
      this.rounds=result.rounds;
      this.tracks=result.tracks;
      this.universities=result.universities;
      this.grades=result.grades;
      this.genders=result.genders;
      this.statuses=result.statuses;
      //this.documents=result.documents;
      this.interviews=result.interviews;
    this.interviewers=result.interviewers;
      debugger
    });
  }


  files:any[];
  message: string;
  progress: number;
  @Output() onUploadFinished=new EventEmitter();
  selectedFiles=[];
  DocumentId = guid();

  isUploaded :boolean;
  public uploadPhoto=(files,StudentId) => {
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    StudentId = this.StudentId;
    this.selectedFiles=files;
    if (files.length==0) return;

    let fileToUpload=<File>files.addedFiles[0];
    const formData=new FormData();
    debugger;
    formData.append("file", fileToUpload, fileToUpload.name);
    formData.append('doc', JSON.stringify(this.files))
    console.log(this.selectedFiles)
    console.log(fileToUpload.name)

  let url ="https://localhost:7115/api/Student/UploadStudentPhoto";
    if(StudentId!=""){

      url +=`?id=${StudentId}`
    }
    this.isUploaded =true;
      return this.http.post<Student>(url, formData ,
       {
        reportProgress: true,
        observe: "events",
        headers:headers
      })
      .subscribe((event) => {
        if (event.type===HttpEventType.UploadProgress) {
          this.progress=Math.round((100*event.loaded)/event.total);
        } else if (event.type===HttpEventType.Response) {
          this.message="Uploaded success.";
          this.onUploadFinished.emit(event.body);
        }
      });
  };
  onRemove(files){
localStorage.removeItem(files);
  }

 validate(){

    // var inputBox = document.getElementById("inputBox");
    // var invalidChars = [
    //   "-",
    //   "+",
    //   "e",
    // ];
    // inputBox.addEventListener("keydown", function(e) {
    //   if (invalidChars.includes(e.key)) {
    //     e.preventDefault();
    //   }
    // });
  //   $("#input").keypress(function(event) {
  //     if (event.which != 8 && event.which != 0 && (event.which < 48 || event.which > 57)) {
  //         $(".alert").html("Enter only digits!").show().fadeOut(2000);
  //         return false;
  //     }
  // });
  }

}
