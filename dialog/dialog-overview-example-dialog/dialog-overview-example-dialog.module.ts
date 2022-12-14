import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogOverviewExampleDialog } from './dialog-overview-example-dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule } from '@angular/material';



@NgModule({
  declarations: [DialogOverviewExampleDialog],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  //exports:[DialogOverviewExampleDialog],
  entryComponents:[DialogOverviewExampleDialog]
})
export class DialogOverviewExampleDialogModule { }
