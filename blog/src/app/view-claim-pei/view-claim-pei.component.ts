import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ViewClaimDatasource, ViewClaimItem } from './view-claim-pei-datasource';


@Component({
  selector: 'app-view-claim-pei',
  templateUrl: './view-claim-pei.component.html',
  styleUrls: ['./view-claim-pei.component.css']
})
export class ViewClaimPeiComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ViewClaimItem>;
  dataSource: ViewClaimDatasource

displayedColumns = ['FileNumber', 'DateUploaded', 'NumberofStudentsEligible', 'NumberofStudentsNotEligible', 'Status'];

  constructor() {
    this.dataSource = new ViewClaimDatasource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}

