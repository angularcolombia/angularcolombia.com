import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from '../../../../shared/models/event.model';
import { EventsService } from '../../../../shared/services/events.service';

@Component({
  selector: 'app-events-resume',
  templateUrl: './events-resume.component.html',
  styleUrls: ['./events-resume.component.scss']
})
export class EventsResumeComponent implements OnInit {

  events: Observable<EventModel[]>;

  constructor(
    private eventsService: EventsService
  ) {
  }

  ngOnInit() {
    this.events = this.eventsService.getAll();
  }

}
