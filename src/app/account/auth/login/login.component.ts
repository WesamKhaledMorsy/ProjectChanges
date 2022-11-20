// import { Component, Input, OnInit } from '@angular/core';
// import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

// import { AuthenticationService } from '../../../core/services/auth.service';
// import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';

// import { ActivatedRoute, Router } from '@angular/router';
// import { first } from 'rxjs/operators';

// import { environment } from '../../../../environments/environment';
// import { HttpClient } from '@angular/common/http';
// import { Student } from 'src/app/pages/student/student.model';
// import { StudentService } from 'src/app/pages/student/student.service';
// import { emailData } from 'src/app/pages/email/inbox/data';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })

// /**
//  * Login component
//  */
// export class LoginComponent implements OnInit {

//   loginForm:  UntypedFormGroup;
//   submitted = false;
//   error = '';
//   returnUrl: string;
//   invalidLogin !: boolean;
//   // set the currenr year
//   year: number = new Date().getFullYear();

//   // tslint:disable-next-line: max-line-length
//   constructor(private formBuilder: UntypedFormBuilder,
//      private route: ActivatedRoute, private router: Router,
//      private http : HttpClient,
//   ) { }

//   ngOnInit() {
//     this.loginForm = this.formBuilder.group({
//      // userName:['',[Validators.required]],
//       email: ['A****@gmail.com', [Validators.required, Validators.email]],
//       password: ['*@_+.Ak,d***', [Validators.required]],
//     });

//     // reset login status
//     // this.authenticationService.logout();
//     // get return url from route parameters or default to '/'
//     // tslint:disable-next-line: no-string-literal
//    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
//   }

//   // convenience getter for easy access to form fields
//   get f() { return this.loginForm.controls; }

//   // StudentId :string;
//   // isAddMode :boolean;

//  // @Input() studentInput : Student = new Student();
//   /**
//    * Form submit
//    */
//   onSubmit() {
//     this.submitted = true;

//     // stop here if form is invalid
//     if (this.loginForm.invalid) {
//     return ;

//     } else {
//       const body = {
//        //UserName:this.loginForm.controls['userName'].value,
//         Email :this.loginForm.controls['email'].value,
//         Password:this.loginForm.controls['password'].value,
//       };
//       this.http.post('https://localhost:7115/api/Auth/Login',body)
//         .subscribe((response:any)=>{

//           const token =(<any>response).tokens;
//           localStorage.setItem('jwt',token);

//           const role = response.roles;
//           localStorage.setItem('roles',role);

//           console.log(token);
//           this.invalidLogin=false;
//           debugger
//           this.router.navigate(['/dashboard']);
//           console.log('response',response);
//          // debugger
//         })

//         // if(localStorage.role=="Trainee"){

//         //   this.route.paramMap.subscribe((params)=>{
//         //     const id = params.get("id");
//         //     this.StudentId=id;

//         //     if(id)
//         //     {
//         //     this.studentServices.getStudentById(id).subscribe((result)=>{
//         //       debugger

//         //         this.studentInput.studentName=result[0].studentName;
//         //         this.studentInput.phoneNumber=result[0].phoneNumber;
//         //         this.studentInput.email=result[0].email;
//         //         this.studentInput.universityId=result[0].universityId;
//         //         this.studentInput.universityName=result[0].universityName;
//         //         this.studentInput.graduationYear=result[0].graduationYear;
//         //         this.studentInput.gradeId=result[0].gradeId;
//         //         this.studentInput.gradeValue=result[0].gradeValue;
//         //         this.studentInput.statusId=result[0].statusId;
//         //         this.studentInput.statusName=result[0].statusName;
//         //         this.studentInput.roundId=result[0].roundId;
//         //         this.studentInput.roundName=result[0].roundName;
//         //         this.studentInput.trackId=result[0].trackId;
//         //         this.studentInput.trackName=result[0].trackName;
//         //         this.studentInput.interviewId=result[0].interviewId;
//         //         this.studentInput.interviewName=result[0].interviewName;
//         //         this.studentInput.interviewerId=result[0].interviewerId;
//         //         this.studentInput.interviewerName=result[0].interviewerName;
//         //         this.studentInput.userName=result[0].userName;
//         //         debugger
//         //         console.log(result);
//         //       })
//         //   this.router.navigate(['/student/profileStudent',this.studentInput.id])
//         // }

//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';

import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/**
 * Login component
 */
export class LoginComponent implements OnInit {
  invalidLogin !: boolean;
  loginForm: FormGroup;
  submitted = false;
  error = '';
  returnUrl: string;

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: UntypedFormBuilder,

    private route: ActivatedRoute, private router: Router,
    private http : HttpClient,
     private authenticationService: AuthenticationService,
    private authFackservice: AuthfakeauthenticationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({

      email: ['admin@themesbrand.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
    });

    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

//  loginForm = new FormGroup({
//    email : new FormGroup("", Validators.required),
//    password: new FormGroup("", Validators.required),
//  });

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      const body = {
               //UserName:this.loginForm.controls['userName'].value,
                Email :this.loginForm.controls['email'].value,
                Password:this.loginForm.controls['password'].value,
              };
              this.http.post(`${environment.apiUrl}/api/Auth/Login`,this.loginForm.value)
                .subscribe((response:any)=>{

                  const token =(<any>response).tokens;
                  localStorage.setItem('jwt',token);

                  const role = response.roles;
                  localStorage.setItem('roles',role);
                  const userName = response.username;
                  localStorage.setItem('userName', userName);
                  const userId=response.userId;
                  localStorage.setItem('userId',userId);
                  console.log(token);
                  // this.invalidLogin=false;
                  debugger
                  this.router.navigate(['/dashboard']);
                  console.log('response',response);
                 // debugger
                });
    }
  }
}

