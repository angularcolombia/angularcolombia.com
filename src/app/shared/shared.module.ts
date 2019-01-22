import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule, MatIconModule,
  MatInputModule, MatListModule,
  MatSidenavModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './components/cross/footer/footer.component';
import { PersonInfoComponent } from './components/cross/person-info/person-info.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { SnackbarComponent } from './components/cross/snackbar/snackbar.component';

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
    MatSnackBarModule
  ],
  declarations: [
    FooterComponent,
    PersonInfoComponent,
    EllipsisPipe,
    SnackbarComponent
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
    FooterComponent,
    PersonInfoComponent,
    SnackbarComponent,
    EllipsisPipe
  ]
})
export class SharedModule { }
