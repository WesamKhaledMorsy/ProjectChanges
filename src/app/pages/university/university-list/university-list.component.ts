import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { Student } from '../../student/student.model';
import { University } from '../university.model';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.scss']
})
export class UniversityListComponent implements OnInit {

  IsAdmin !:boolean;
  IsInterviewer !:boolean;
  IsUser !:boolean;
  LoggedIn : boolean = false;

  selectUniversities : University[];
  searchText :any;

  @Input() university :University;
  @Output() universityUpdated =new EventEmitter<University>();
  constructor(private http : HttpClient,
    public formBuilder : FormBuilder) { }

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
    this.getUniversities();

  }
  students :Student[];
  getUniversities(){
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    return this.http.get<any>('https://localhost:7115/api/University/GetUniversity'
    ,{
      headers:headers
    })
    .subscribe(data =>{
      this.selectUniversities = data;

      console.log(this.selectUniversities);
    })
  }

  universityId:number =0;
  universityName:string ="";

  adminId:number;



  public deleteUniversity(universityId:number){
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url ="https://localhost:7115/api/University/DeleteUniversity";
    if(universityId !=0)
      url +=`?id=${universityId}`

      return this.http.delete<University>(url,{headers:headers});

  }

  onDeleteUniversity(universityId:number) {
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
          this.deleteUniversity(universityId)
            .subscribe((_university)=> {
              this.universityUpdated.emit(_university);
              this.getUniversities()
            });
            //!===============
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'University has been deleted.',
            'success'
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'University is safe :)',
            'error'
          );
        }
      }
      );
  }

}
