import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { from, Observable } from 'rxjs';
import { map, tap, take, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }

  canActivate() {
    return this.afAuth.authState
      .pipe(
        take(1),
        switchMap((authState) => {
          if (!authState) {
            this.router.navigate(['']);
            return null;
          }
          return this.isAdmin()
            .pipe(
              map(isAdmin => {
                if(!isAdmin) {
                  this.router.navigate(['']);
                  return null;
                }else {
                  return true;
                }
              }),
              take(1)
            )
        })
      );
  }

  isAdmin() {
    return from(this.authService.isAdmin());
  }
}