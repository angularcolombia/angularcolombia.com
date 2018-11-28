import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-box',
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.scss']
})
export class EventBoxComponent implements OnInit {
  @Input() eventInfo: any;
  @Input() position: number;

  constructor() { }

  ngOnInit() {
  }

}
