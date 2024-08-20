import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/firebase/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public show: boolean = false;
  public loginForm: FormGroup | any;
  public errorMessage: any;
  public _error : any

  constructor(public authService: AuthService, private fb: FormBuilder) {
      this.loginForm = this.fb.group({
        email: ['spruko@template.com', [Validators.required, Validators.email]],
        password: ['spruko', Validators.required]
      });

  }

  ngOnInit(): void {
    document.querySelector('body')?.classList.remove('horizontal');
    document.body.className = "ltr error-page1 bg-primary"
  }

  ngOnDestroy() {
    document.body.className = "ltr main-body app sidebar-mini"
   }

  showPassword() {
    this.show = !this.show;
  }

  // Login With Google
  loginGoogle() {
    this.authService.GoogleAuth();
  }

  // Login With Twitter
  loginTwitter(): void {
    this.authService.signInTwitter();
  }

  // Login With Facebook
  loginFacebook() {
    this.authService.signInFacebok();
  }

  // Simple Login
  login() {
    this.authService.SignIn(this.loginForm.value['email'], this.loginForm.value['password']).then(() => {
      console.clear();
    })
    .catch((_error: any) => {
      this._error = _error;
    });;
  }

}
