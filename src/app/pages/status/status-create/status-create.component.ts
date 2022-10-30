import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import Swal from 'sweetalert2';
import { Status } from '../status.model';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-status-create',
  templateUrl: './status-create.component.html',
  styleUrls: ['./status-create.component.scss']
})
export class StatusCreateComponent implements OnInit {
  statuses : Status[];

  editMode :boolean =false;  //? write editMode to check if we are in edit mode or Add mode
  isAddMode : boolean;        //?  write AddMode to check if we are in edit mode or Add mode
  StatusId :string="";

  IsAdmin !:boolean;
  IsInterviewer !:boolean;
  IsUser !:boolean;
  LoggedIn :boolean = false;

   @Input() StatusInput : Status = new Status();
   @Output() statusUpdated= new EventEmitter <Status[]>();

   @Input() fromDate: Date;
   @Input() toDate: Date;
   @Output() dateRangeSelected: EventEmitter<{}> = new EventEmitter();
   @ViewChild('dp', { static: true }) datePicker: any;
   constructor(private http :HttpClient,
     private statusServices : StatusService ,
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
      this.StatusId=id;
      this.isAddMode =! id;
      if(params.keys[0])
    {
      debugger
      this.statusServices.getStatusById(id.toString()).subscribe((result)=>{

        debugger
        //this.universityInput.id=result.id;
        this.StatusInput.statusName=result[0].statusName;
        this.StatusInput.adminId=result[0].adminId;

        console.log(result);
      }
    );
    }
    });
    this._GetAllStatusData();
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
      let status = new Status();
      status.id=form.value.id;
        status.statusName = form.value.statusNamea ;
        status.adminId="3fa85f64-5717-4562-b3fc-2c963f66afa6";
        debugger
      this.http.post<any>
        ('https://localhost:7115/api/Status/CreateNewStatus',
        status ,{headers:headers}).subscribe(data => {
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


    }
    else{
      this.StatusInput.id=this.StatusId;
      this.statusServices.UpdateStatus(this.StatusInput)
          .subscribe((UpStatus)=>{
          this.statusUpdated.emit(UpStatus);
      }, )

      //!==
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Status Updated Successfully',
        showConfirmButton: false,
        timer: 1500
      });
    //!==
    }
        form.reset(this.StatusInput);
  }

  _GetAllStatusData():Observable<Status>{
    const headers = new HttpHeaders({
    Authorization :`Bearer ${localStorage.getItem('jwt')}`,
  });
    let url ="https://localhost:7115/api/Status/GetStatus";
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
