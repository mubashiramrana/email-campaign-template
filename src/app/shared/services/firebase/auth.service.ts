import { Injectable, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  public userData: any;
  public showLoader: boolean = false;

  constructor(
    public router: Router,
    public ngZone: NgZone,
    public toster: ToastrService,
    private cookieService: CookieService) {
  }

  ngOnInit(): void { }

  // sign in function
  SignIn(email:any, password:any) {
    debugger;
    return this.router.navigate(['/dashboard/dashboard01']);
    //return true;
  }

}
