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

    const event: EventModel = {
      name: 'Angular vs React',
      description: 'Esta es la descripción',
      date: 'Diciembre, 1 del 2018',
      nextEvent: false,
      place: 'Platzi',
      mainImg: '../../../assets/img/event-img.jpg',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      recommendations: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      sponsors: [
        {
          name: 'Accenture',
          logo: '../../../assets/img/acn-logo.png',
          description: ''
        },
        {
          name: 'Globant',
          logo: '../../../assets/img/globant-logo.svg',
          description: ''
        },
        {
          name: 'Toptal',
          logo: '../../../assets/img/toptal-logo.png',
          description: ''
        }
      ],
      registerLink: 'https://goo.gl/forms/RRTgz0nVNRXcfyzv2',
      gmLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.651583506624!2d-74.05959715054702!3d4.656071643324932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a4333a1a275%3A0x91a59c01b85e3f59!2sPlatzi!5e0!3m2!1sen!2sco!4v1543436069289'
    };

    this.eventsService.add(event);
  }

  showUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
