import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  durationInSeconds = 5;
  hide = true;
  constructor(public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  openSnackBar() {
    this.snackBar.openFromComponent(successComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
@Component({
  selector: 'snack-bar',
  templateUrl: 'snackbar.html',
  styles: [`
    .example-pizza-party {
      color: white;
    }
  `],
})
export class successComponent {}


