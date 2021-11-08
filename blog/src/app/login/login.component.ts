import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})
export class LoginComponent implements OnInit {
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






