import Swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../student.model';
import { Grade } from '../../grade/grade.model';
import { University } from '../../university/university.model';
import { Gender } from '../../gender/gender.model';
import { Status } from '../../status/status.model';
import { Track } from '../../track/track.model';
import { Round } from '../../round/round.model';
import { Observable } from 'rxjs/internal/Observable';
import { Document } from '../../documents/document.model';
import { Interview } from '../../interview/interview.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  IsAdmin !:boolean;
  IsInterviewer !:boolean;
  IsUser !:boolean;
  LoggedIn : boolean = false;

  selectStudent : Student[];
  searchText :any;

  @Input() studentInput :Student;
  @Output() studentUpdated =new EventEmitter<Student>();
  id: string;
  constructor(private http : HttpClient,
    public formBuilder : FormBuilder,
    public route:Router) { }

  ngOnInit(): void {

    const role :any =localStorage.getItem('roles');
    if(role== "Admin"){
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
    this.GetAllStudentData();
    this.getStudents();

  }
 documents : Document[];
  grades : Grade[];
  universities :University[];
  genders :Gender[];
  statuses : Status[];
  tracks :Track[];
  rounds :Round[];
  interviews : Interview[];

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
    })
  }

  public deleteStudent(studentId:string){
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url ="https://localhost:7115/api/Student/DeleteStudent";
    if(studentId !="")
      url +=`?id=${studentId}`

      return this.http.delete<Gender>(url,{headers:headers});

  }

  onDeleteStudent(studentId:string) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ms-2'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: 'You wont be able to revert this!',
        icon: 'question',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        showCancelButton: true
      })
      .then(result => {
        if (result.value) {
          //!main code for delete
          this.deleteStudent(studentId)
            .subscribe((_Student)=> {
              this.studentUpdated.emit(_Student);
              this.getStudents()
            });
            //!===============
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Studnet has been deleted.',
            'success'
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Student is safe :)',
            'error'
          );
        }
      }
      );
  }

  getAllStudnets(
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
    let url=`https://localhost:7115/api/Student/GetAllStudents/pageIndex=${pageIndex}&pageSize=${pageSize}`
    if(id!="") url+=`&id=${id}`;
    if(studentName!="") url+=`&name=${studentName}`;
    if(status !="") url+= `&status=${status}`;
    if(adminId !="") url+= `&adminId=${adminId}`;
    return this.http.get<Student[]>(url,{headers:headers});
  }


  studentId:string ="";
  studentName:string ="";
  statusName:string;
  email:string;
  adminId:string;
  _pageIndex =1;
  _pageSize=20;
  selectedStudents : Student[];

  FilterStudents(){
    this.getAllStudnets(
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
      this.documents=result.documents;
      this.interviews=result.interviews;
      debugger
    });

  }

}
