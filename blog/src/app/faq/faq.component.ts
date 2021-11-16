import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { throwMatDuplicatedDrawerError } from '@angular/material/sidenav';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  panelOpenState = false;
  clicked=false;

  constructor() { }

  ngOnInit(): void {
  }
action(event: MouseEvent){
  (event.target as HTMLButtonElement).disabled=true;
  
}

}