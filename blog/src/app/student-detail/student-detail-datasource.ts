import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface StudentDetailItem {
  studentIdNumber: number;
  institutionId: number;
  nic: string;
  surname: string;
  maidenName: string;
  otherName: string;
  academicYearAndMonthOfFirstIntake : string;
  academicYear: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: StudentDetailItem[] = [
  {institutionId: 1, studentIdNumber: 12, nic: "abc", surname: "Scott", maidenName: "Gellar", otherName:"Alex", academicYearAndMonthOfFirstIntake: "2019-March", academicYear: "2019-20"},
  {institutionId: 2, studentIdNumber: 23, nic: "asd", surname: "Liam", maidenName: "Noah", otherName:"Oliver", academicYearAndMonthOfFirstIntake: "2020-March", academicYear: "2020-21"},
  {institutionId: 3, studentIdNumber: 35, nic: "gfd", surname: "Ava", maidenName: "Emma", otherName:"Olivia ", academicYearAndMonthOfFirstIntake: "2018-March", academicYear: "2018-19"},
  {institutionId: 4, studentIdNumber: 45, nic: "ytr", surname: "Charles", maidenName: "Boyles", otherName:"Sam", academicYearAndMonthOfFirstIntake: "2017-March", academicYear: "2017-18"},
  {institutionId: 5, studentIdNumber: 58, nic: "yvf", surname: "Marys", maidenName: "Fox", otherName:"Tigger", academicYearAndMonthOfFirstIntake: "2018-March", academicYear: "2018-19"},
  {institutionId: 6, studentIdNumber: 23, nic: "ttr", surname: "Lina", maidenName: "Susan", otherName:"Lady", academicYearAndMonthOfFirstIntake: "2018-March", academicYear: "2018-19"},  
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
        case 'studentIdNumber': return compare(a.studentIdNumber, b.studentIdNumber, isAsc);
        case 'institutionId': return compare(a.institutionId, b.institutionId, isAsc);
        case 'nic': return compare(a.nic, b.nic, isAsc);
        case 'surname': return compare(a.surname, b.surname, isAsc);
        case 'maidenName': return compare(a.maidenName, b.maidenName, isAsc);
        case 'otherName': return compare(a.otherName, b.otherName, isAsc);
        case 'academicYearAndMonthOfFirstIntake': return compare(a.academicYearAndMonthOfFirstIntake, b.academicYearAndMonthOfFirstIntake, isAsc);
        case 'academicYear': return compare(a.academicYear, b.academicYear, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
