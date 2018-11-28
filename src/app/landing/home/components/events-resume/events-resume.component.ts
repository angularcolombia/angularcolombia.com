import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-resume',
  templateUrl: './events-resume.component.html',
  styleUrls: ['./events-resume.component.scss']
})
export class EventsResumeComponent implements OnInit {

  events = [
    {
      id: 1,
      title: 'Angular animations',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '10/07/2018'
    },
    {
      id: 2,
      title: 'Angular V6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '10/07/2018'
    },
    {
      id: 4,
      title: 'Angular with Firebase',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '10/07/2018'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
