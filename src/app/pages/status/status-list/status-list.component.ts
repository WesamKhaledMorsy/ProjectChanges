import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Status } from '../status.model';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.scss']
})
export class StatusListComponent implements OnInit {
  IsAdmin !:boolean;
  IsInterviewer !:boolean;
  IsUser !:boolean;
  LoggedIn : boolean = false;

  selectStatus: Status[];
  searchText :any;

  @Input() status :Status;
  @Output() statusUpdated =new EventEmitter<Status>();
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
    this.getStatuses();

  }
  statuses :Status[];
  getStatuses(){
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    return this.http.get<any>(`${environment.apiUrl}/api/Status/GetStatus`
    ,{
      headers:headers
    })
    .subscribe(data =>{
      this.selectStatus = data;

      console.log(this.selectStatus);
    })
  }

  public deleteStatus(statusId:string){
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url =`${environment.apiUrl}/api/Status/DeleteStatus`;
    if(statusId !="")
      url +=`?id=${statusId}`

      return this.http.delete<Status>(url,{headers:headers});

  }

  onDeleteStatus(statusId:string) {
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
          this.deleteStatus(statusId)
            .subscribe((_status)=> {
              this.statusUpdated.emit(_status);
              this.getStatuses()
            });
            //!===============
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Status has been deleted.',
            'success'
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Status is safe :)',
            'error'
          );
        }
      }
      );
  }

}
