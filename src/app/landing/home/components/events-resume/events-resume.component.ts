import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable, BehaviorSubject, Subject, combineLatest } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

import { EventModel } from '../../../../shared/models/event.model';
import { EventsService } from '../../../../shared/services/events.service';

@Component({
  selector: 'app-events-resume',
  templateUrl: './events-resume.component.html',
  styleUrls: ['./events-resume.component.scss'],
})
export class EventsResumeComponent implements OnDestroy, OnInit {
  events: Observable<EventModel[]>;

  private allEvents$ = new BehaviorSubject<EventModel[]>([]);
  private countEvents$: Observable<number>;
  private destroy$ = new Subject();
  private readonly tabletCount = 2;
  private readonly mobileAndDesktopCount = 3;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private eventsService: EventsService,
  ) {
    this.countEvents$ = this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.Medium])
      .pipe(
        map(r => (r.matches ? this.tabletCount : this.mobileAndDesktopCount)),
        takeUntil(this.destroy$),
      );
  }

  ngOnInit() {
    this.eventsService
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe(events => this.allEvents$.next(events));

    this.events = combineLatest(
      this.allEvents$.pipe(map(events => events.filter(e => !e.is_next_event))),
      this.countEvents$,
      (events, count) => events.slice(0, count),
    ).pipe(takeUntil(this.destroy$));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
