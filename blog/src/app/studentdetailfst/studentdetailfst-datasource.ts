import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface StudentDetailFstItem {
CurrentYearOfStudy:string;
CurrentSemesterOfStudy:string;
ModuleCode: string;
Ft:string;
ProgrammeCode:string;
FacultyId:number;
StudentStatus:string;
Remarks:string;





}

// TODO: replace this with real data from your application
const EXAMPLE_DATA:  StudentDetailFstItem[] = [
  {FacultyId:1, ProgrammeCode:"111",CurrentYearOfStudy:"2021", CurrentSemesterOfStudy: "3", ModuleCode:"111", Ft:"1", StudentStatus:"active",Remarks:"good"},
  {FacultyId:1, ProgrammeCode:"111",CurrentYearOfStudy:"2021", CurrentSemesterOfStudy: "3", ModuleCode:"111", Ft:"1", StudentStatus:"active",Remarks:"good"},
  {FacultyId:1, ProgrammeCode:"111",CurrentYearOfStudy:"2021", CurrentSemesterOfStudy: "3", ModuleCode:"111", Ft:"1", StudentStatus:"active",Remarks:"good"},
  {FacultyId:1, ProgrammeCode:"111",CurrentYearOfStudy:"2021", CurrentSemesterOfStudy: "3", ModuleCode:"111", Ft:"1", StudentStatus:"active",Remarks:"good"},
  
];

/**
 * Data source for the SingleViewClaimScnd view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class StudentDetailFstDataSource extends DataSource< StudentDetailFstItem> {
  data:  StudentDetailFstItem[] = EXAMPLE_DATA;
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
  connect(): Observable< StudentDetailFstItem[]> {
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
  private getPagedData(data:  StudentDetailFstItem[]):  StudentDetailFstItem[] {
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
  private getSortedData(data: StudentDetailFstItem[]): StudentDetailFstItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'CurrentYearOfStudy': return compare(a.CurrentYearOfStudy, b.CurrentYearOfStudy, isAsc);
        case 'CurrentSemesterOfStudy': return compare(a.CurrentSemesterOfStudy, b.CurrentSemesterOfStudy, isAsc);
        case 'ModuleCode': return compare(a.ModuleCode, b.ModuleCode, isAsc);
        case 'Ft': return compare(a.Ft, b.Ft, isAsc);
        case 'FacultyId': return compare(a.FacultyId, b.FacultyId, isAsc);
      
        case 'StudentStatus': return compare(a.StudentStatus, b.StudentStatus, isAsc);
        case 'Remarks': return compare(a.Remarks, b.Remarks, isAsc);
        case 'ProgrammeCode': return compare(a.ProgrammeCode, b.ProgrammeCode, isAsc);
       
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
