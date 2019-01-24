import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { SnackbarComponent } from '../cross/snackbar/snackbar.component';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() { }

  signUpWithProvider(provier) {
    if(provier === 'google') {
      this.signUpWithGoogle();
    }
  }

  private signUpWithGoogle() {
    this.authService.signUpWithGoogle().then(res => {
      const user = res.user;
      user.updateProfile({displayName: 'this.name.value', photoURL: null});
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


}
