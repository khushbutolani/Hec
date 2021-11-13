import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface StudentDetailItem {
  PEI:string;
  NICNo :number;
  StudentId:number;
  NameOfStudent:string;
  ProgrammeCode:string;
  Year:string;
  Semester: string;
  NoofModules: number;
  TotalFundReleased : number;
  DateClaimSubmitted:string;
  
  Remarks:string;

}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: StudentDetailItem[] = [
  {PEI: "1000",NICNo:1,StudentId:1,NameOfStudent:"abc",ProgrammeCode:"111",Year:"2021",Semester:"3",NoofModules:2,TotalFundReleased:10000,DateClaimSubmitted:"21/10/2021",Remarks:"done"},
 
 
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
        case 'NICNo': return compare(a.NICNo, b.NICNo, isAsc);
        case 'StudentId': return compare(a.StudentId, b.StudentId, isAsc);
        case 'NameOfStudent': return compare(a.NameOfStudent, b.NameOfStudent, isAsc);
        case 'ProgrammeCode': return compare(a.ProgrammeCode, b.ProgrammeCode, isAsc);
        case 'Year': return compare(a.Year, b.Year, isAsc);
        case 'Semester': return compare(a.Semester, b.Semester, isAsc);
        case 'NoofModules': return compare(a.NoofModules, b.NoofModules, isAsc);
        case 'TotalFundReleased	': return compare(a.TotalFundReleased, b.TotalFundReleased, isAsc);
        case 'DateClaimSubmitted': return compare(a.DateClaimSubmitted, b.DateClaimSubmitted, isAsc);
        case 'Remarks': return compare(a.Remarks, b.Remarks, isAsc);
       
       
       
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
