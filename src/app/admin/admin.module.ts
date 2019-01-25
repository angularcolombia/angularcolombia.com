import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { EventComponent } from './event/event.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdminComponent, EventComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
