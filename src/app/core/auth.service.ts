import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, UserInfo } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _user: UserInfo;

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  signOut() {
    return this.afAuth.auth.signOut();
  }

  signUpWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  get user() {
    return this.afAuth.user;
  }

  async getUserClaims() {
    return this.afAuth.auth.currentUser.getIdTokenResult().then(idTokenResult => idTokenResult.claims);
  }

  async isAdmin() {
    const claimsObj = await this.getUserClaims();
    return claimsObj['admin'] === true;
  }

}
