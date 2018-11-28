import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-event-hero',
  templateUrl: './next-event-hero.component.html',
  styleUrls: ['./next-event-hero.component.scss']
})
export class NextEventHeroComponent implements OnInit {

  nextEvent = {
    title: 'Angular vs React',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    address: '28 de Octubre, Platzi HQ Cl. 72 #9 - 55, Bogotá',
    time: '6:30pm - 8:30pm'
  }

  constructor() { }

  ngOnInit() {
  }

}
