import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions'; // Testing the event registration end point


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private functions: AngularFireFunctions) { } // Testing the event registration end point

  // Testing the event registration end point
  ngOnInit() {
    this.functions.httpsCallable('eventRegistration')({ eventId: '4L3j1GBk5KzFqGvY7SFX' })
      .toPromise()
      .then(resp => {
        console.log( resp );
      })
      .catch(err => {
        console.error({ err });
      });
  }

}
