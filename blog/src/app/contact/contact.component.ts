import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';






@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  durationInSeconds = 5;
  form= new FormGroup({
    name:new FormControl('',[Validators.required])
  })
 
 

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit(): void {
   
  }
  login(){
    console.warn(this.form.value);
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
  


