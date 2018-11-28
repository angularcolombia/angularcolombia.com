import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NextEventHeroComponent } from './home/components/next-event-hero/next-event-hero.component';
import { NumbersComponent } from './home/components/numbers/numbers.component';
import { LookingForSponsorshipComponent } from './home/components/looking-for-sponsorship/looking-for-sponsorship.component';
import { EventsResumeComponent } from './home/components/events-resume/events-resume.component';
import { EventBoxComponent } from './home/components/events-resume/event-box/event-box.component';
import { HomeComponent } from './home/home.component';
import { OrganizersComponent } from './home/components/organizers/organizers.component';
import { EventComponent } from './event/event.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
  ],
  declarations: [
    LandingComponent,
    NextEventHeroComponent,
    NumbersComponent,
    LookingForSponsorshipComponent,
    EventsResumeComponent,
    EventBoxComponent,
    HomeComponent,
    OrganizersComponent,
    EventComponent
  ]
})
export class LandingModule { }
