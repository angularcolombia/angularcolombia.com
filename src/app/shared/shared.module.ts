import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule, MatIconModule,
  MatInputModule, MatListModule,
  MatSidenavModule, MatSnackBarModule,
  MatToolbarModule,
  MatMenuModule,
  MatTabsModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './components/cross/footer/footer.component';
import { PersonInfoComponent } from './components/cross/person-info/person-info.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { SnackbarComponent } from './components/cross/snackbar/snackbar.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule,
    MatMenuModule,
    MatTabsModule
  ],
  declarations: [
    FooterComponent,
    PersonInfoComponent,
    SnackbarComponent,
    EllipsisPipe,
    UserAuthComponent
  ],
  entryComponents: [
    SnackbarComponent
  ],
  exports: [
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule,
    MatMenuModule,
    FooterComponent,
    PersonInfoComponent,
    SnackbarComponent,
    EllipsisPipe,
    UserAuthComponent,
    MatTabsModule
  ]
})
export class SharedModule { }
