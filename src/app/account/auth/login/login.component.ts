import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

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

  loginForm: UntypedFormGroup;
  submitted = false;
  error = '';
  returnUrl: string;
  invalidLogin !: boolean;
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
      email: ['A****@gmail.com', [Validators.required, Validators.email]],
      password: ['*@_+.Ak,d***', [Validators.required]],
    });

    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

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
        Email :this.loginForm.controls['email'].value,
        Password:this.loginForm.controls['password'].value,
      };
      this.http.post('https://localhost:7115/api/Auth/Login',body)
        .subscribe((response:any)=>{
          const token =(<any>response).tokens;
          localStorage.setItem('jwt',token);

          const role = response.roles;
          localStorage.setItem('roles',role);

          console.log(token);
          this.invalidLogin=false;

          this.router.navigate(['/dashboard']);
          // console.log('response',response);
          debugger
        })

    }
  }
  //  if (environment.defaultauth === 'firebase') {
  //       this.authenticationService.login(this.f.email.value, this.f.password.value).then((res: any) => {
  //         this.router.navigate(['/dashboard']);
  //       })
  //         .catch(error => {
  //           this.error = error ? error : '';
  //         });
  //     } else {
  //       this.authFackservice.login(this.f.email.value, this.f.password.value)
  //         .pipe(first())
  //         .subscribe(
  //           data => {
  //             this.router.navigate(['/dashboard']);
  //           },
  //           error => {
  //             this.error = error ? error : '';
  //           });
  //     }
  //   }
  // }
}
