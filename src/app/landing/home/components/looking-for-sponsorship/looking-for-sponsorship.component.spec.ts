import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookingForSponsorshipComponent } from './looking-for-sponsorship.component';

describe('LookingForSponsorshipComponent', () => {
  let component: LookingForSponsorshipComponent;
  let fixture: ComponentFixture<LookingForSponsorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookingForSponsorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookingForSponsorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
