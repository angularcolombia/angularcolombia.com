import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsResumeComponent } from './events-resume.component';

describe('EventsResumeComponent', () => {
  let component: EventsResumeComponent;
  let fixture: ComponentFixture<EventsResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
