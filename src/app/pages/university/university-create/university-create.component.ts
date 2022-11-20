import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { University } from '../university.model';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university-create',
  templateUrl: './university-create.component.html',
  styleUrls: ['./university-create.component.scss']
})
export class UniversityCreateComponent implements OnInit {



  universitys : University[];



  editMode :boolean =false;  //? write editMode to check if we are in edit mode or Add mode
  isAddMode : boolean;        //?  write AddMode to check if we are in edit mode or Add mode
  UniversityId :string="";

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
      this.UniversityId=id;
      this.isAddMode =! id;
      // if(id == null)
      // {
      //   this.isAddMode=true;
      // }else {

      //   this.isAddMode =false;
      //   this.universityServices.getUniversityById(id.toString()).subscribe((result)=>{

      //     debugger
      //     // this.universityInput.id=result[0].id;
      //     this.universityInput.universityName=result.universityName;
      //     this.universityInput.adminId=result.adminId;

      //     console.log(result);
      // }
      //   );
    // }


      if(params.keys[0])
    {
      debugger
      this.universityServices.getUniversityById(id.toString()).subscribe((result)=>{

        debugger
        //this.universityInput.id=result.id;
        this.universityInput.universityName=result[0].universityName;
        this.universityInput.adminId=result[0].adminId;

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
      university.id=form.value.id;
        university.universityName = form.value.universityName ;
        university.adminId="3fa85f64-5717-4562-b3fc-2c963f66afa6";
        debugger
      this.http.post<any>
        (`${environment.apiUrl}/api/University/CreateNewUniversity`,
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
      this.universityInput.id=this.UniversityId;
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

  _GetAllUniversityData():Observable<University>{
    const headers = new HttpHeaders({
    Authorization :`Bearer ${localStorage.getItem('jwt')}`,
  });
    let url =`${environment.apiUrl}/api/University/GetUniversity`;
    return this.http.get<any>(url,{headers:headers});
  }

  // GetAllUniversityData(){
  //   this._GetAllUniversityData().subscribe((result : any)=> {

  //     this.interviewers=result.interviewers;
  //     this.students=result.students;
  //     this.rounds=result.rounds;
  //     debugger
  //   });



}
