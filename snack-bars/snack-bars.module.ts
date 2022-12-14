import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarsComponent } from './snack-bars.component';
import { MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SnackBarsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [SnackBarsComponent]
})
export class SnackBarsModule { }
