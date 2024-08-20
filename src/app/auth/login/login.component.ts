import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public show: boolean = false;
  public loginForm: FormGroup | any;
  public errorMessage: any;
  public _error: any

  constructor(private fb: FormBuilder, public router: Router,
  ) {
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
  login() {
    this.router.navigate(['/dashboard/dashboard01']);
  }

}
