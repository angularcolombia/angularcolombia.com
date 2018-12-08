import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../shared/services/events.service';
import { EventModel } from '../../shared/models/event.model';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  events: Observable<EventModel[]>;

  constructor(
    private eventsService: EventsService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.events = this.eventsService.getAll();
  }

  showUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
