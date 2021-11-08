import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})

export class ForgotpasswordComponent implements OnInit {
  
  durationInSeconds = 5;
  constructor(public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  openSnackBar() {
    this.snackBar.openFromComponent(successComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
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


