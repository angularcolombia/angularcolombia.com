import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { SnackbarComponent } from '../cross/snackbar/snackbar.component';
import { UserInfo } from 'firebase';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {
  _user: UserInfo;

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() { }

  signOut() {
    this.authService.signOut();
  }

  signUpWithProvider(provier) {
    if(provier === 'google') {
      this.signUpWithGoogle();
    }
  }

  private signUpWithGoogle() {
    this.authService.signUpWithGoogle().then(res => {
      console.log(res)
      this.showMessage('Registrado exitosamente');
      this.router.navigate(['']);
    }).catch(err => {
      this.showMessage('Ha ocurrido un problema');
    });
  }

  private showMessage(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 500,
      data: message
    });
  }

  get user() {
    return this.authService.user;
  }


}
