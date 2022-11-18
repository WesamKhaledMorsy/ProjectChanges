import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { first } from 'rxjs/operators';
import { UserProfileService } from '../../../core/services/user.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/core/models/auth.models';
import { Observable } from 'rxjs/internal/Observable';
//import { CustomEmailValidator } from "../shared/custom-email.validator";

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

  // set the currenr year
  year: number = new Date().getFullYear();
  someServiceWorkingWithDatabase: any;

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: UntypedFormBuilder,
     private route: ActivatedRoute,
      private router: Router,
      private http : HttpClient,
       private authenticationService: AuthenticationService,
    private userService: UserProfileService,
    //private emailValidator: CustomEmailValidator
    ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      // username: [{value: null, disabled: false},
      //   [Validators.required, this.validateUsername()]],
      username: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
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
    this.http.post<any>('https://localhost:7115/api/Auth/Register',body)
    .subscribe((data)=>{
      console.log("response",data);
      localStorage.setItem('jwt', data.tokens);
      localStorage.setItem('roles',data.roles);
      localStorage.setItem('userId',data.userId);
      localStorage.setItem('userName',data.username);
      if(this.http.request)
      {
        this.router.navigate(['/student/createStudent']);
      }else if(data.tokens==null){
        //window.alert("This Email is exist");
        this.router.navigate(['/account/signup']);
      }
      else{
        window.alert("Please put your data Write");
        this.router.navigate(['/account/signup']);
      }


      debugger
    })

  }

}
interface AsyncValidatorFn {
  (c: AbstractControl): Promise<ValidationErrors|null>|Observable<ValidationErrors|null>
}
