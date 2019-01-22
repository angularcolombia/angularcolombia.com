import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextEventHeroComponent } from './next-event-hero.component';

describe('NextEventHeroComponent', () => {
  let component: NextEventHeroComponent;
  let fixture: ComponentFixture<NextEventHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextEventHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextEventHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
