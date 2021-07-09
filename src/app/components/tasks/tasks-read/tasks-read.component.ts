import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from '../../../models/tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-read',
  templateUrl: './tasks-read.component.html',
  styleUrls: ['./tasks-read.component.css']
})
export class TasksReadComponent implements OnInit {

  //?_page=1&_limit=1 -> Paginação

  task: Task[]
  displayedColumns: string[] = [
    'id',
    'number',
    'name',
    'description',
    'creation',
    'finalized',
    'action'
  ]

  constructor(
    private serviceTask: TasksService
  ) { }

  ngOnInit(): void {
    this.getTasksList()
  }

  getTasksList(): void {
    this.serviceTask.read().subscribe(tasks => {
      this.task = tasks;
    })
  }

}
