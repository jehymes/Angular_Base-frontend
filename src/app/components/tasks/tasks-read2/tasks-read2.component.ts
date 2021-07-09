import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Task } from '../../../models/tasks.model';
import { TasksRead2DataSource } from './tasks-read2-datasource';

@Component({
  selector: 'app-tasks-read2',
  templateUrl: './tasks-read2.component.html',
  styleUrls: ['./tasks-read2.component.css']
})
export class TasksRead2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Task>;
  dataSource: TasksRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'number', 'name', 'description'];

  constructor() {
    this.dataSource = new TasksRead2DataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
