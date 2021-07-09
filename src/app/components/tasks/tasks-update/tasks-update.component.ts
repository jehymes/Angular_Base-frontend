import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Constants } from "src/app/utils/constants.component";
import { Mesage } from "src/app/utils/mesage.component";
import { HeaderService } from "../../template/header/header.service";
import { Task } from "../../../models/tasks.model";
import { TasksService } from "../tasks.service";
import * as moment from "moment";

@Component({
  selector: "app-tasks-update",
  templateUrl: "./tasks-update.component.html",
  styleUrls: ["./tasks-update.component.css"],
})
export class TasksUpdateComponent implements OnInit {
  task: Task = {
    taskNumber: null,
    taskName: "",
    taskDescription: "",
    taskDateCreation: null,
    taskDateDelivery: null,
    taskFinalized: false,
  };
  constructor(
    private serviceTask: TasksService,
    private router: Router,
    private route: ActivatedRoute,
    private msg: Mesage,
    private con: Constants
  ) {}

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get("id");
    this.serviceTask.readById(id).subscribe((task) => {
      this.task = task;
    });
  }

  updateTask(): void {
    let dateMoment = moment();
    if (this.task.taskFinalized)
      this.task.taskDateDelivery = new Date(
        new Date(dateMoment.format("YYYY-MM-DD[T]HH:mm:ss"))
      );

    console.log("this.task.taskDateDelivery :>> ", this.task.taskDateDelivery);

    this.serviceTask.update(this.task).subscribe(() => {
      this.cancelTask();
      this.msg.showMesageFull(
        this.con.MESAGE.TASK_UPDATE,
        this.con.TYPES_MESAGE.SUCCESS,
        2500
      );
    });
  }

  cancelTask(): void {
    this.router.navigate([this.con.routesConst.tasks]);
  }
}
