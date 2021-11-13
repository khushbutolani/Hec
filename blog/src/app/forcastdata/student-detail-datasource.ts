import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface StudentDetailItem {
  PEI:string;
  FutureAcademicYear : string;
  FutureSemester : string;
  PresentAcademicYear: string;
  PresentSemester : string;
  StudentNIC:string;
  ProgrammeCode:string;
  AmountDisbursed: string;
  AmounttobepaidbyHEC : string;


}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: StudentDetailItem[] = [
  {PEI: "1000", FutureAcademicYear:"2022",FutureSemester:"4",PresentAcademicYear:"2021",PresentSemester:"3",StudentNIC:"101",ProgrammeCode:"111",AmountDisbursed:'10000',AmounttobepaidbyHEC:'5000'},
 
 
  // {institutionId: 7, studentIdNumber: 79},
  // {institutionId: 8, studentIdNumber: 80},
  // {institutionId: 9, studentIdNumber: 92},
  // {institutionId: 10, studentIdNumber: 97},
  // {institutionId: 11, studentIdNumber: 'Sodium'},
  // {institutionId: 12, studentIdNumber: 'Magnesium'},
  // {institutionId: 13, studentIdNumber: 'Aluminum'},
  // {institutionId: 14, studentIdNumber: 'Silicon'},
  // {institutionId: 15, studentIdNumber: 'Phosphorus'},
  // {institutionId: 16, studentIdNumber: 'Sulfur'},
  // {institutionId: 17, studentIdNumber: 'Chlorine'},
  // {institutionId: 18, studentIdNumber: 'Argon'},
  // {institutionId: 19, studentIdNumber: 'Potassium'},
  // {institutionId: 20, studentIdNumber: 'Calcium'},
];

/**
 * Data source for the StudentDetail view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class StudentDetailDataSource extends DataSource<StudentDetailItem> {
  data: StudentDetailItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<StudentDetailItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: StudentDetailItem[]): StudentDetailItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: StudentDetailItem[]): StudentDetailItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'PEI': return compare(a.PEI, b.PEI, isAsc);
        case 'FutureAcademicYear': return compare(a.FutureAcademicYear, b.FutureAcademicYear, isAsc);
        case 'FutureSemester': return compare(a.FutureSemester, b.FutureSemester, isAsc);
        case 'PresentAcademicYear': return compare(a.PresentAcademicYear, b.PresentAcademicYear, isAsc);
        case 'PresentSemester': return compare(a.PresentSemester, b.PresentSemester, isAsc);
        case 'StudentNIC': return compare(a.StudentNIC, b.StudentNIC, isAsc);
        case 'ProgrammeCode': return compare(a.ProgrammeCode, b.ProgrammeCode, isAsc);
        case 'AmountDisbursed': return compare(a.AmountDisbursed, b.AmountDisbursed, isAsc);
        case 'AmounttobepaidbyHEC': return compare(a.AmounttobepaidbyHEC, b.AmounttobepaidbyHEC, isAsc);
       
       
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
