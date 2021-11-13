import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { StudentDetailDataSource, StudentDetailItem } from './student-detail-datasource';

@Component({
  selector: 'app-forcastdata',
  templateUrl: './forcastdata.component.html',
  styleUrls: ['./forcastdata.component.css']
})
export class ForcastdataComponent implements  AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<StudentDetailItem>;
  dataSource: StudentDetailDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['PEI', 'FutureAcademicYear', 'FutureSemester', 'PresentAcademicYear', 'PresentSemester',  'StudentNIC','ProgrammeCode','AmountDisbursed', 'AmounttobepaidbyHEC'];

  constructor() {
    this.dataSource = new StudentDetailDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}

 


