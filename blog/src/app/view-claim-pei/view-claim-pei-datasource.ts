import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ViewClaimItem {
  FileNumber : number;
  DateUploaded: string;
  NumberofStudentsEligible : number;
  NumberofStudentsNotEligible : number;
  Status : string;
 
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ViewClaimItem[] = [
 {FileNumber:1, DateUploaded: "1/2/21", NumberofStudentsEligible:10,NumberofStudentsNotEligible: 5,Status:"true"},
 {FileNumber:1, DateUploaded: "1/2/21", NumberofStudentsEligible:10,NumberofStudentsNotEligible: 5,Status:"true"},
 {FileNumber:1, DateUploaded: "1/2/21", NumberofStudentsEligible:10,NumberofStudentsNotEligible: 5,Status:"true"}
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
export class ViewClaimDatasource extends DataSource<ViewClaimItem> {
  data: ViewClaimItem[] = EXAMPLE_DATA;
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
  connect(): Observable<ViewClaimItem[]> {
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
  private getPagedData(data: ViewClaimItem[]): ViewClaimItem[] {
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
  private getSortedData(data: ViewClaimItem[]): ViewClaimItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'FileNumber': return compare(a.FileNumber, b.FileNumber, isAsc);
        case 'DataUploaded': return compare(a.DateUploaded, b.DateUploaded, isAsc);
        case 'NumberofStudentsEligible': return compare(a.NumberofStudentsEligible, b.NumberofStudentsEligible, isAsc);
        case 'NumberofStudentsNotEligible': return compare(a.NumberofStudentsNotEligible, b.NumberofStudentsNotEligible, isAsc);
        case 'Status': return compare(a.Status, b.Status, isAsc);
       
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
