import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventModel } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private eventsCollection: AngularFirestoreCollection<EventModel>;
  eventsItems: Observable<EventModel[]>;
  path: string;

  constructor(
    private afs: AngularFirestore
  ) {
    this.path = 'events';
  }

  getAll(): Observable<EventModel[]> {

    this.eventsCollection = this.afs.
    collection<EventModel>(this.path);

    this.eventsItems = this.eventsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as EventModel;
        const _id = a.payload.doc.id;
        return { _id, ...data };
      }))
    );
    return this.eventsItems;
  }

  add(item: EventModel) {
    this.eventsCollection.add(item);
  }

  update(id: string, item: Partial<EventModel>) {
    this.afs.doc(`${this.path}/${id}`).update(item);
  }

  remove(id: string) {
    this.afs.doc(`${this.path}/${id}`).delete();
  }
}
