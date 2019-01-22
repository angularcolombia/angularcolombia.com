import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit {

  data = [
    {
      number: '+3m',
      info: 'Members'
    },
    {
      number: '+30',
      info: 'Meetups'
    },
    {
      number: '+3',
      info: 'Años'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
