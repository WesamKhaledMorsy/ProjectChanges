import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import Swal from 'sweetalert2';
import { University } from '../university.model';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university-create',
  templateUrl: './university-create.component.html',
  styleUrls: ['./university-create.component.scss']
})
export class UniversityCreateComponent implements OnInit {

  universityData :University  [];

  universitys : University[];



  editMode :boolean =false;  //? write editMode to check if we are in edit mode or Add mode
  isAddMode : boolean;        //?  write AddMode to check if we are in edit mode or Add mode
  UniversityId :number;

  IsAdmin !:boolean;
  IsInterviewer !:boolean;
  IsUser !:boolean;
  LoggedIn :boolean = false;

   @Input() universityInput : University = new University();
   @Output() universityUpdated= new EventEmitter <University[]>();

   @Input() fromDate: Date;
   @Input() toDate: Date;
   @Output() dateRangeSelected: EventEmitter<{}> = new EventEmitter();
   @ViewChild('dp', { static: true }) datePicker: any;
   constructor(private http :HttpClient,
     private universityServices : UniversityService ,
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
      const id =+params.get("id");
      this.UniversityId=id;
      this.isAddMode =! id;
      if(id)
    {
      this.universityServices.getUniversityById(id).subscribe((result)=>{

        debugger
        this.universityInput.universityName=result.universityName;

        console.log(result);
      }
    );
    }
    });
    this._GetAllUniversityData();
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
      let university = new University();
        university.universityName = form.value.universityName ;
        debugger
      this.http.post<any>
        ('https://localhost:7115/api/University/CreateNewUniversity',
        university ,{headers:headers}).subscribe(data => {
          console.log(data)

          //!==
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'University created Successfully',
          showConfirmButton: false,
          timer: 1500
        });
      //!==
      })


    }
    else{
      this.universityInput.id=this.UniversityId.toString();
      this.universityServices.UpdateUniversity(this.universityInput)
          .subscribe((UpUniversity)=>{
          this.universityUpdated.emit(UpUniversity);
      }, )

      //!==
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'University Updated Successfully',
        showConfirmButton: false,
        timer: 1500
      });
    //!==
    }
        form.reset(this.universityInput);
  }

  _GetAllUniversityData():Observable<any>{
    let url ="https://localhost:7115/api/University/GetUniversity";
    return this.http.get<any>(url);
  }

  // GetAllUniversityData(){
  //   this._GetAllUniversityData().subscribe((result : any)=> {

  //     this.interviewers=result.interviewers;
  //     this.students=result.students;
  //     this.rounds=result.rounds;
  //     debugger
  //   });



}
