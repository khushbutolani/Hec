import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { StudentDetailFstDataSource, StudentDetailFstItem } from './studentdetailfst-datasource';

@Component({
  selector: 'app-studentdetailfst',
  templateUrl: './studentdetailfst.component.html',
  styleUrls: ['./studentdetailfst.component.css']
})
export class StudentdetailfstComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable< StudentDetailFstItem>;
  dataSource:  StudentDetailFstDataSource;
  displayedColumns = ['FacultyId', 'ProgrammeCode','CurrentYearOfStudy',  'CurrentSemesterOfStudy', 'ModuleCode', 'Ft','StudentStatus', 'Remarks'];

 
  constructor() {
    this.dataSource = new  StudentDetailFstDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
 