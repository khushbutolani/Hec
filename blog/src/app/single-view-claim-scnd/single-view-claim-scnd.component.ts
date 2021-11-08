import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SingleViewClaimScndDataSource, SingleViewClaimScndItem } from './single-view-claim-scnd-datasource';

@Component({
  selector: 'app-single-view-claim-scnd',
  templateUrl:  './single-view-claim-scnd.component.html',
  styleUrls: ['./single-view-claim-scnd.component.css']
})
export class SingleViewClaimScndComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<SingleViewClaimScndItem>;
  dataSource: SingleViewClaimScndDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['notEligibleReason', 'uploadedBy', 'dateTimeUploaded', 'submittedByForApproval', 'dataTimeSubmittedForApproval'];

  constructor() {
    this.dataSource = new SingleViewClaimScndDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
