import { ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {

  communityName = 'Angular Colombia';
  subtitle = 'Community';

  scrolled = false;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  pageList = [
    {
      'title': 'Inicio',
      'path': 'home'
    },
    /*{
      'title': 'Comunidad',
      'path': 'home'
    },
    {
      'title': 'Eventos',
      'path': 'home'
    },
    {
      'title': 'Blog',
      'path': 'home'
    },
    {
      'title': 'Galería',
      'path': 'home'
    },
    {
      'title': 'Código de Conducta',
      'path': 'home'
    }*/
  ];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  @HostListener('document:scroll', ['$event'])
  onDocumentMousewheelEvent() {
    const position = window.pageYOffset;
    this.scrolled = position >= 70;
  }

}
