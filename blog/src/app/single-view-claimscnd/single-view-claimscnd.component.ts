import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SingleViewClaimScndDataSource, SingleViewClaimScndItem } from './single-view-claim-scnd-datasource';

@Component({
  selector: 'app-single-view-claimscnd',
  templateUrl: './single-view-claimscnd.component.html',
  styleUrls: ['./single-view-claimscnd.component.css']
})
export class SingleViewClaimscndComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<SingleViewClaimScndItem>;
  dataSource: SingleViewClaimScndDataSource;
  displayedColumns = ['CurrentYearOfStudy', 'CurrentSemesterOfStudy', 'ModuleCode', 'Ft', 'TutionFeesClaimForPayment', 'AdminFeeClaimForPayment', 'StudentStatus', 'Remarks','fundOfTutionFeesByPei','Refund'];
  
  constructor() {
    this.dataSource = new SingleViewClaimScndDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  
 
}

