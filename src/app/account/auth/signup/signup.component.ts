import { Component, OnInit } from '@angular/core';
import { AbstractControl, EmailValidator, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { first } from 'rxjs/operators';
import { UserProfileService } from '../../../core/services/user.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/core/models/auth.models';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry } from 'rxjs/operators';
//import { CustomEmailValidator } from "../shared/custom-email.validator";
import'rxjs/RX';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: UntypedFormGroup;
  submitted = false;
  error = '';
  successmsg = false;
  pattern: string | RegExp;
  // set the currenr year
  year: number = new Date().getFullYear();
  someServiceWorkingWithDatabase: any;

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: UntypedFormBuilder,
     private route: ActivatedRoute,
      private router: Router,
      private http : HttpClient,
       private authenticationService: AuthenticationService,
   // private userService: UserProfileService,
    //private emailValidator: CustomEmailValidator
    ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      // username: [{value: null, disabled: false},
      //   [Validators.required, this.validateUsername()]],
      username: ['',[Validators.required ,Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8), Validators.maxLength(15)]],
    });
  }
//   private validateUsername(): ValidatorFn {
//     return (control: AbstractControl): {[key: string]:any} => {
//       return this.someServiceWorkingWithDatabase.checkUsername(control)
//         .subscribe(
//           ({ data }) => {
//             let res: string = data;
//             if (res === control.value) {
//               return { 'alreadyExist': true };
//             } else {
//               return null;
//             }
//           },
//           (error) => {
//             console.log(error);
//           }
//         );
//     }
// }
  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  /**
   * On submit form
   */

  errorMessage:string;
  user:User;
  onSubmit() {


    this.submitted = true;
    debugger
    const body={
      UserName:this.signupForm.controls['username'].value,
      Email:this.signupForm.controls['email'].value,
      Password:this.signupForm.controls['password'].value,
    }
    debugger
    this.http.post<any>(`${environment.apiUrl}/api/Auth/Register`,body)
    .subscribe((data)=>{
      console.log("response",data);
      console.log(data.error)
      localStorage.setItem('jwt', data.tokens);
      localStorage.setItem('roles',data.roles);
      localStorage.setItem('userId',data.userId);
      localStorage.setItem('userName',data.username);
      console.log(data.message);
      debugger
      if(data.message==null)
      {
        this.router.navigate(['/student/createStudent']);
      }else if(data.tokens==null){
        this.errorMessage=data.message;
        console.log(this.errorMessage);
        this.router.navigate(['/account/signup']);
      }
      else{
        this.errorMessage=data.message;
        console.log(this.errorMessage);
        // window.alert("Please put your data Write");
        this.router.navigate(['/account/signup']);
      }


      debugger
    },(error:any) =>{
      console.log(error.message);
        error.statusText;
       // window.alert("This Email is Exist , Try another email");
       error.body.cancel;
       console.log(error)
      return error;
    } )


  }
  // .map(
  //   (response:Response)=>{
  //     const data = response.json();
  //     return data;
  //   }
  // );
  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
interface AsyncValidatorFn {
  (c: AbstractControl): Promise<ValidationErrors|null>|Observable<ValidationErrors|null>
}
