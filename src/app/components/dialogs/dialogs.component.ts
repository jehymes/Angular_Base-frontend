import { Component, Inject, Input, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import * as moment from "moment";
import { Annotations } from "src/app/models/anotations.model";
import { AnnotationsService } from "src/app/views/annotations/annotations.service";

@Component({
  selector: "app-dialogs",
  templateUrl: "./dialogs.component.html",
  styleUrls: ["./dialogs.component.css"],
})
export class DialogsComponent implements OnInit {
  create: boolean = false;
  deletar: boolean = false;
  update: boolean = false;

  dialogValues: Annotations = {
    id: null,
    title: "",
    content: "",
    data: null,
  };

  constructor(
    private dialog: MatDialog,
    private annotationsService: AnnotationsService,
    @Inject(MAT_DIALOG_DATA) public data: Annotations
  ) {}

  ngOnInit(): void {
    if (
      (this.data[0] != undefined || this.data[0] != null) &&
      this.data[1].action == "DELETE"
    ) {
      this.deletar = true;
      this.create = false;
      this.update = false;
      this.dialogValues = this.data[0];
    } else if (
      (this.data[0] != undefined || this.data[0] != null) &&
      this.data[1].action == "UPDATE"
    ) {
      this.deletar = false;
      this.create = false;
      this.update = true;
      this.dialogValues = this.data[0];
    } else if (this.data[1].action == "CREATE") {
      this.deletar = false;
      this.update = false;
      this.create = true;
    }
  }

  createAnnotation(): any {
    let dateMoment = moment();
    this.dialogValues.data = new Date(
      dateMoment.format("YYYY-MM-DD[T]HH:mm:ss")
    );
    this.annotationsService.create(this.dialogValues).subscribe((element) => {
      return element;
    });
  }

  deleteAnnotation(): any {
    this.annotationsService
      .delete(this.dialogValues.id)
      .subscribe((element) => {
        return element;
      });
  }

  updateAnnotation(): any {
    let dateMoment = moment();
    this.dialogValues.data = new Date(
      dateMoment.format("YYYY-MM-DD[T]HH:mm:ss")
    );
    this.annotationsService.update(this.dialogValues).subscribe((element) => {
      return element;
    });
  }

  cancelAnnotation(): void {
    this.dialog.closeAll();
  }
}
