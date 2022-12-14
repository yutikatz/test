import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatProgressBarModule, MatTooltipModule, MatTreeModule } from '@angular/material';

@NgModule({
  declarations: [TreeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTreeModule,
    MatProgressBarModule,

  ],
  exports: [TreeComponent],

})
export class TreeModule { }
