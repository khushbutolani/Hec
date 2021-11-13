import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { StudentDetailDataSource, StudentDetailItem } from './student-detail-datasource';

@Component({
  selector: 'app-adhoc-data',
  templateUrl: './adhoc-data.component.html',
  styleUrls: ['./adhoc-data.component.css']
})
export class AdhocDataComponent implements  AfterViewInit  {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<StudentDetailItem>;
  dataSource: StudentDetailDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['PEI', 'FacultyClusterId', 'ProgrammeCode', 'ClaimFileNo', 'AmountPaidtoPEI'];

  constructor() {
    this.dataSource = new StudentDetailDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
