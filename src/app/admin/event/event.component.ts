import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SnackbarComponent } from 'src/app/shared/components/cross/snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  model: any = {
    venue: 'Huge',
    sponsors: [
      'sponsors/qkqmXK349ONZGkksglRW'
    ]
  };

  constructor(private snackBar: MatSnackBar, private afs: AngularFirestore) { }

  ngOnInit() {
  }

  onSubmit() {
    this.afs.collection('events')
      .add(this.model)
        .then(() => {
          this.showMessage('Event created successfully');
        })
        .catch(() => {
          this.showMessage('There was an error :/');
        })
  }

  private showMessage(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 1500,
      data: message
    });
  }

}
