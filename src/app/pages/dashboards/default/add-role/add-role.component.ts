import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/core/models/auth.models';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { AddRole } from './add-role.model';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {

  RoleForm : UntypedFormGroup;
  submitted = false;

  users: User;
  userId : string;

  roles:AddRole[];

  roleId:string;
  LogedIn : boolean = false;
  IsAdmin !:boolean;
  IsInterviewer !:boolean;
  IsUser !:boolean;

  isAddMode:boolean;
  errorMessage:string;
  @Input() userInput : User = new User();
  @Input() roleInput : AddRole = new AddRole();
  @Output() userUpdated= new EventEmitter <User[]>();
  constructor(private http:HttpClient,
    private formBuilder: UntypedFormBuilder,
    private route:ActivatedRoute,
    private router:Router ) { }

  ngOnInit(): void {
    const role :any =localStorage.getItem('roles');
    if(role== "Admin"){
       this.IsAdmin =true;
       this.IsInterviewer=false;
       this.IsUser=false;
       this.LogedIn=false;
    }else if (role=="Interviewer"){
      this.IsInterviewer= true;
      this.IsAdmin = false;
      this.IsUser=false;
      this.LogedIn=false;
    }
    else if(role == "Trainee"){
      debugger
      this.IsUser=true;
      this.IsInterviewer=false;
      this.IsAdmin=false;
      this.LogedIn=false;
      debugger
    }

      this.RoleForm = this.formBuilder.group({
        userId: ['',[Validators.required]],
        roleName: ['', [Validators.required]],
      });

this.GetRole();


  }

  get f() { return this.RoleForm.controls; }

  onSubmit(){
    debugger
    const body={
      UserId:this.RoleForm.controls['userId'].value,
      RoleName:this.RoleForm.controls['roleName'].value,

    }
    this.submitted = true;
      // const headers = new HttpHeaders({
      //   Authorization :`Bearer ${localStorage.getItem('jwt')}`,
      // });


      this.http.post<any>
        (`${environment.apiUrl}/api/Auth/AddRole`,
        body ).subscribe(data => {
          console.log(data)
          debugger
          //!==
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Role Added Successfully',
          showConfirmButton: false,
          timer: 1500
        });
      //!==
      if(data.message==null)
      {
        this.router.navigate(['/']);
      }else if(data.tokens==null){
        this.errorMessage=data.message;
        console.log(this.errorMessage);
        
      }
      else{
        this.errorMessage=data.message;
        console.log(this.errorMessage);
        // window.alert("Please put your data Write");
        this.router.navigate(['/account/signup']);
      }
      this.router.navigate(['/']);
      })



  }
  _getAllRoles():Observable<any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url =`${environment.apiUrl}/api/Auth/GetRole`;
    return this.http.get<any>(url,{headers:headers});
  }
  GetRole(){
    this._getAllRoles().subscribe((result : any)=> {

      this.roles=result;
      console.log(this.roles);
      debugger
    });

  }
}

