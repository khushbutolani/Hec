import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface SingleViewClaimScndItem {
  notEligibleReason: string;
  uploadedBy: string;
  dateTimeUploaded: string; //date
  submittedByForApproval: string;
  dataTimeSubmittedForApproval: string;

}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: SingleViewClaimScndItem[] = [
  {notEligibleReason: "Criteria not satisfied", uploadedBy: "Samael", dateTimeUploaded: "20-03-2021, 14:02:20", submittedByForApproval: "Kriss", dataTimeSubmittedForApproval: "21-03-2021, 19:02:20"},
  {notEligibleReason: "Insufficient Data", uploadedBy: "Olive", dateTimeUploaded: "10-01-2020, 11:22:10", submittedByForApproval: "Sid", dataTimeSubmittedForApproval: "02-02-2020, 11:02:22"},
  {notEligibleReason: "Invalid form", uploadedBy: "James", dateTimeUploaded: "09-08-2021, 15:01:30", submittedByForApproval: "Kim", dataTimeSubmittedForApproval: "22-09-2021, 13:28:02"},

];

/**
 * Data source for the SingleViewClaimScnd view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class SingleViewClaimScndDataSource extends DataSource<SingleViewClaimScndItem> {
  data: SingleViewClaimScndItem[] = EXAMPLE_DATA;
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
  connect(): Observable<SingleViewClaimScndItem[]> {
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
  private getPagedData(data: SingleViewClaimScndItem[]): SingleViewClaimScndItem[] {
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
  private getSortedData(data: SingleViewClaimScndItem[]): SingleViewClaimScndItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'dateTimeUploaded': return compare(a.dateTimeUploaded, b.dateTimeUploaded, isAsc);
        case 'uploadedBy': return compare(a.uploadedBy, b.uploadedBy, isAsc);
        case 'submittedByForApproval': return compare(a.submittedByForApproval, b.submittedByForApproval, isAsc);
        case 'dataTimeSubmittedForApproval': return compare(a.dataTimeSubmittedForApproval, b.dataTimeSubmittedForApproval, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
