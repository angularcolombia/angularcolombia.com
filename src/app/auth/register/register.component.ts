import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from '../../shared/components/cross/snackbar/snackbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;
  registerForm: FormGroup;

  constructor(
    private fireAuth: AngularFireAuth,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'name': new FormControl('', Validators.required),
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

  get name() { return this.registerForm.get('name'); }

  get email() { return this.registerForm.get('email'); }

  get password() { return this.registerForm.get('password'); }

  getNameErrorMessage() {
    return this.name.hasError('required') ? 'Éste campo es requerido' : '';
  }

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

  register() {
    if(this.registerForm.invalid) {
      return;
    }

    this.fireAuth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then((res) => {
        const user = res.user;
        user.updateProfile({displayName: this.name.value, photoURL: null});
        this.showMessage('Registrado exitosamente');
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

