import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { SnackbarComponent } from '../../shared/components/cross/snackbar/snackbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;

  constructor(
    private fireAuth: AngularFireAuth,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ])
    });
  }

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'Éste campo es requerido' :
      this.email.hasError('email') ? 'Email no válido' :
        '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'Éste campo es requerido' :
      this.password.hasError('minLength') ? 'Debe contener min 8 dígitos' :
        '';
  }

  login() {
    if(this.loginForm.invalid) {
      return;
    }

    this.fireAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
      .then((res) => {
        this.showMessage('Bienvenido');
        this.router.navigate(['']);
      })
      .catch(err => {
        this.showMessage('Ha ocurrido un problema');
      });

  }

  showMessage(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 500,
      data: message
    });
  }

}
