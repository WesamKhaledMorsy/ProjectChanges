import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { first } from 'rxjs/operators';
import { UserProfileService } from '../../../core/services/user.service';
import { HttpClient } from '@angular/common/http';

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

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: UntypedFormBuilder,
     private route: ActivatedRoute,
      private router: Router,
      private http : HttpClient,
       private authenticationService: AuthenticationService,
    private userService: UserProfileService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  /**
   * On submit form
   */
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
      if(data.tokens!=null && data.roles=="Trainee")
      {
        this.router.navigate(['/student/createStudent']);
      }else{
        window.alert("Please put your data Write");
        this.router.navigate(['/account/signup']);
      }


      debugger
    })

  }
}
