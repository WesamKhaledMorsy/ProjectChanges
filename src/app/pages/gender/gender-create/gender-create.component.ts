import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Gender } from '../gender.model';
import { GenderService } from '../gender.service';

@Component({
  selector: 'app-gender-create',
  templateUrl: './gender-create.component.html',
  styleUrls: ['./gender-create.component.scss']
})
export class GenderCreateComponent implements OnInit {
  genders : Gender[];

  editMode :boolean =false;  //? write editMode to check if we are in edit mode or Add mode
  isAddMode : boolean;        //?  write AddMode to check if we are in edit mode or Add mode
  GenderId :string="";

  IsAdmin !:boolean;
  IsInterviewer !:boolean;
  IsUser !:boolean;
  LoggedIn :boolean = false;

   @Input() GenderInput : Gender = new Gender();
   @Output() genderUpdated= new EventEmitter <Gender[]>();

   @Input() fromDate: Date;
   @Input() toDate: Date;
   @Output() dateRangeSelected: EventEmitter<{}> = new EventEmitter();
   @ViewChild('dp', { static: true }) datePicker: any;

   constructor(private http :HttpClient,
    private router:Router,
     private genderServices : GenderService,
     private route:ActivatedRoute ) { }

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
      this.GenderId=id;
      this.isAddMode =! id;
      if(params.keys[0])
    {
      debugger
      this.genderServices.getGenderById(id.toString()).subscribe((result)=>{

        debugger
        //this.universityInput.id=result.id;
        this.GenderInput.genderType=result[0].genderType;
        this.GenderInput.adminId=result[0].adminId;

        console.log(result);
      }
    );
    }
    });
    this._GetAllGenderData();
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
      let gender = new Gender();
      gender.id=form.value.id;
      gender.genderType = form.value.genderType ;
      gender.adminId="3fa85f64-5717-4562-b3fc-2c963f66afa6";
        debugger
      this.http.post<any>
        (`${environment.apiUrl}/api/Gender/CreateNewGender`,
        gender ,{headers:headers}).subscribe(data => {
          console.log(data)

          //!==
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Status created Successfully',
          showConfirmButton: false,
          timer: 1500
        });
      //!==
      })
this.router.navigate(['/gender/listGender']);

    }
    else{
      this.GenderInput.id=this.GenderId;
      this.genderServices.UpdateGender(this.GenderInput)
          .subscribe((UpGender)=>{
          this.genderUpdated.emit(UpGender);
      }, )

      //!==
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Gender Updated Successfully',
        showConfirmButton: false,
        timer: 1500
      });
    //!==
    }
    this.router.navigate(['/gender/listGender']);
        form.reset(this.GenderInput);
  }

  _GetAllGenderData():Observable<Gender>{
    const headers = new HttpHeaders({
    Authorization :`Bearer ${localStorage.getItem('jwt')}`,
  });
    let url =`${environment.apiUrl}/api/Gender/GetGenders`;
    return this.http.get<any>(url,{headers:headers});
  }

}
