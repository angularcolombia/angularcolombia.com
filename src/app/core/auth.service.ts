import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  signOut() {
    return this.afAuth.auth.signOut();
  }

  signUpWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
}
