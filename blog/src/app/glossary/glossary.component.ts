import { Component, OnInit } from '@angular/core';
/*export interface PeriodicElement {
  glossary: string;
explanation: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {glossary:"Basic Check", explanation:"Check such as on NID validity"},
  {glossary:"Claims", explanation:"Request of fund or request of fees from to PEIs to HEC for FTES"},
  {glossary:"FTEMIS", explanation:"The Proposed System"},
  {glossary:"FTES Portal", explanation:"The Proposed System"},
  {glossary:"Invalid Case", explanation:"Student does not meet the requirment follow the basic check"},
 
 
];
*/

export interface PeriodicElement {
  glossary: string;
  explanation: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {glossary:"Basic Check", explanation:"Check such as on NID validity"},
  {glossary:"Claims", explanation:"Request of fund or request of fees from to PEIs to HEC for FTES"},
  {glossary:"FTEMIS", explanation:"The Proposed System"},
  {glossary:"FTES Portal", explanation:"The Proposed System"},
  {glossary:"Invalid Case", explanation:"Student does not meet the requirment follow the basic check"},
 
 
];
@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css']
})
export class GlossaryComponent implements OnInit {
  displayedColumns: string[] =  ['glossary','explanation'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
