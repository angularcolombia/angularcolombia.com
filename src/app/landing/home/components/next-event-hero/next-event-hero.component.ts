import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from '../../../../shared/models/event.model';
import { EventsService } from '../../../../shared/services/events.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-next-event-hero',
  templateUrl: './next-event-hero.component.html',
  styleUrls: ['./next-event-hero.component.scss']
})
export class NextEventHeroComponent implements OnInit {

  events: Observable<EventModel[]>;

  constructor(
    private eventsService: EventsService
  ) {
  }

  ngOnInit() {
    this.events = this.eventsService.getAll().pipe(
      map(events => events.filter(e => e.is_next_event === true))
    );
  }
}
