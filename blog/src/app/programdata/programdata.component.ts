import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { StudentDetailDataSource, StudentDetailItem } from './student-detail-datasource';

@Component({
  selector: 'app-programdata',
  templateUrl: './programdata.component.html',
  styleUrls: ['./programdata.component.css']
})
export class ProgramdataComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<StudentDetailItem>;
  dataSource: StudentDetailDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['PEI','ProgrammeCode','ProgrammeName','NoofStudents','TutionFees','GeneralFees','ModeofStudy'];

  constructor() {
    this.dataSource = new StudentDetailDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}

 