import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [ButtonsComponent]
})
export class ButtonsModule { }
