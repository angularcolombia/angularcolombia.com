import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
  }

  onSubmit() {
    this.afs.collection('events')
      .add(this.model)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        })
  }

}
