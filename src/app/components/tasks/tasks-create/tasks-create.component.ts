import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TasksService } from "../tasks.service";
import { Mesage } from "src/app/utils/mesage.component";
import { Task } from "../../../models/tasks.model";
import { Constants } from "src/app/utils/constants.component";

@Component({
  selector: "app-tasks-create",
  templateUrl: "./tasks-create.component.html",
  styleUrls: ["./tasks-create.component.css"],
})
export class TasksCreateComponent implements OnInit {
  task: Task = {
    taskNumber: null,
    taskName: "",
    taskDescription: "",
    taskDateCreation: null,
    taskDateDelivery: null,
    taskFinalized: false,
  };

  constructor(
    private mesage: Mesage,
    private constants: Constants,
    private taskService: TasksService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createTask(): void {
    this.taskService.create(this.task).subscribe(() => {
      this.showMesage(
        this.constants.MESAGE.TASK_SUCCESS,
        this.constants.TYPES_MESAGE.SUCCESS,
        this.constants.TIMES[25]
      );
      this.router.navigate([this.constants.routesConst.tasks]);
    });
  }

  cancelTask(): void {
    this.router.navigate([this.constants.routesConst.tasks]);
  }

  showMesage(msg, type, times): void {
    if (type != null && times != null)
      this.mesage.showMesageFull(msg, type, times);
    else if (type != null && times == null)
      this.mesage.showMesageNoTimes(msg, type);
    else if (type == null && times == null) this.mesage.showMesageDefeault(msg);
  }
}
