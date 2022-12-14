import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snack-bars',
  templateUrl: './snack-bars.component.html',
  styleUrls: ['./snack-bars.component.scss']
})
export class SnackBarsComponent   {

  constructor(private snackBar: MatSnackBar) {}

  open(message: string, action: string) {
 
    this.snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['my-snack-bar']
    });
  }

}
