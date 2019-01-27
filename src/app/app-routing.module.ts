import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './core/auth.service';
import { AdminGuardService } from './core/admin-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/landing/landing.module#LandingModule'
  },
  {
    path: 'dashboard',
    loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'admin',
    loadChildren: 'src/app/admin/admin.module#AdminModule',
    canActivate: [AdminGuardService]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [AdminGuardService]
})
export class AppRoutingModule { }
