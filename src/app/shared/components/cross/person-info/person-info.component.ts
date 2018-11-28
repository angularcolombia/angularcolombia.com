import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {

  @Input() profileImg: string;
  @Input() fullName: string;
  @Input() profession: string;

  constructor() { }

  ngOnInit() {
  }

}
