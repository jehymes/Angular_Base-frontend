import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Task } from '../../../models/tasks.model';

// TODO: replace this with real data from your application
const EXAMPLE_DATA: Task[] = [
  {id: 1, taskNumber: 12321, taskName: 'Hydrogen', taskDescription: 'Descrição', taskFinalized: false},
  {id: 2, taskNumber: 12322, taskName: 'Helium', taskDescription: 'Descrição', taskFinalized: false},
  {id: 3, taskNumber: 12323, taskName: 'Lithium', taskDescription: 'Descrição', taskFinalized: false},
  {id: 4, taskNumber: 12324, taskName: 'Beryllium', taskDescription: 'Descrição', taskFinalized: false},
  {id: 5, taskNumber: 12325, taskName: 'Boron', taskDescription: 'Descrição', taskFinalized: false},
  {id: 6, taskNumber: 12326, taskName: 'Carbon', taskDescription: 'Descrição', taskFinalized: false},
  {id: 7, taskNumber: 12327, taskName: 'Nitrogen', taskDescription: 'Descrição', taskFinalized: false},
  {id: 8, taskNumber: 12328, taskName: 'Oxygen', taskDescription: 'Descrição', taskFinalized: false},
  {id: 9, taskNumber: 12329, taskName: 'Fluorine', taskDescription: 'Descrição', taskFinalized: false},
  {id: 10, taskNumber: 12330, taskName: 'Neon', taskDescription: 'Descrição', taskFinalized: false},
];

/**
 * Data source for the TasksRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TasksRead2DataSource extends DataSource<Task> {
  data: Task[] = EXAMPLE_DATA;
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
  connect(): Observable<Task[]> {
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
  private getPagedData(data: Task[]): Task[] {
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
  private getSortedData(data: Task[]): Task[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'description': return compare(a.taskDescription, b.taskDescription, isAsc);
        case 'name': return compare(a.taskName, b.taskName, isAsc);
        case 'number': return compare(a.taskNumber, b.taskNumber, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
