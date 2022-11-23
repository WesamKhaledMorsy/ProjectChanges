import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Student } from '../../student/student.model';
import { Gender } from '../gender.model';

@Component({
  selector: 'app-gender-list',
  templateUrl: './gender-list.component.html',
  styleUrls: ['./gender-list.component.scss']
})
export class GenderListComponent implements OnInit {
  IsAdmin !:boolean;
  IsInterviewer !:boolean;
  IsUser !:boolean;
  LoggedIn : boolean = false;

  selectGender : Gender[];
  searchText :any;

  @Input() gender :Gender;
  @Output() genderUpdated =new EventEmitter<Gender>();
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
    this.getGenders();

  }
  students :Student[];
  getGenders(){

    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    return this.http.get<any>(`${environment.apiUrl}/api/Gender/GetGenders`
    ,{
      headers:headers
    })
    .subscribe(data =>{
      this.selectGender = data;

      console.log(this.selectGender);
    })
  }

  public deleteGender(genderId:string){
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url =`${environment.apiUrl}/api/Gender/DeleteGender`;
    if(genderId !="")
      url +=`?id=${genderId}`

      return this.http.delete<Gender>(url,{headers:headers});

  }

  onDeleteGender(genderId:string) {
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
          this.deleteGender(genderId)
            .subscribe((_gender)=> {
              this.genderUpdated.emit(_gender);
              this.getGenders()
            });
            //!===============
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Gender has been deleted.',
            'success'
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Gender is safe :)',
            'error'
          );
        }
      }
      );
  }
// onCreate(id:string){
//   this.route.navigate(['/gender/edit',id]);
// }

}
