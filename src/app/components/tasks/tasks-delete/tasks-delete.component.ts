import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'src/app/utils/constants.component';
import { Mesage } from 'src/app/utils/mesage.component';
import { HeaderService } from '../../template/header/header.service';
import { Task } from '../../../models/tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-delete',
  templateUrl: './tasks-delete.component.html',
  styleUrls: ['./tasks-delete.component.css']
})
export class TasksDeleteComponent implements OnInit {

  task: Task = {
    taskNumber: null,
    taskName: '',
    taskDescription: '',
    taskDateCreation: null,
    taskDateDelivery: null,
    taskFinalized: false
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private con: Constants,
    private serviceTask: TasksService,
    private msg: Mesage
    ) { 
    }

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id')
    this.serviceTask.readById(id).subscribe(task => {
      this.task = task;
    })
  }

  deleteTask(): void {
    this.serviceTask.delete(this.task.id).subscribe(() => {
      this.cancelTask();
      this.msg.showMesageFull(
        this.con.MESAGE.TASK_DELETE,
        this.con.TYPES_MESAGE.SUCCESS,
        2500
      )
    })
  }

  cancelTask(): void {
    this.router.navigate([this.con.routesConst.tasks])
  }

}
