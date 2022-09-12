import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authservice: AuthService, private router: Router) { }

  canActivate() {
    // if (!this.authservice.isTokenExpired()) {
    //     return true;
    // }

    this.router.navigate(['/login']);
    return false;
  }
}
