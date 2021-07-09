import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Annotations } from "src/app/models/anotations.model";
import { Constants } from "src/app/utils/constants.component";
import { Mesage } from "src/app/utils/mesage.component";
import { AnnotationsService } from "src/app/views/annotations/annotations.service";
import { DialogsComponent } from "../dialogs/dialogs.component";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.css"],
})
export class TimelineComponent implements OnInit {
  annotations: any[] = [];

  constructor(
    private annotationsService: AnnotationsService,
    private annotationsDialog: MatDialog,
    private msg: Mesage,
    private cs: Constants
  ) {}

  ngOnInit(): void {
    this.loadAnnotations();
  }

  checkResolve(itemValue: any): void {
    this.annotations.forEach((item) => {
      if (item === itemValue) {
        if (itemValue.resolved) {
          itemValue.resolved = false;
          itemValue.status = "";
        } else {
          itemValue.resolved = true;
          itemValue.status = "R";
        }

        this.annotationsService.update(itemValue).subscribe(() => {
          this.loadAnnotations();
        });
      }
    });
  }

  loadAnnotations(): void {
    this.annotationsService.read().subscribe((response) => {
      this.annotations = response;
      this.annotations.sort(this.ordemDecrescente)
    });
  }

  deleteItem(itemValue: Annotations): void {
    let dialogRef = this.annotationsDialog.open(DialogsComponent, {
      data: [{
        id: itemValue.id,
        title: itemValue.title,
        content: itemValue.content,
        data: itemValue.data
    },{action: "DELETE"}]});
    dialogRef.afterClosed().subscribe(annotation => {
      if (annotation !== undefined) {
        this.annotationsService.read().subscribe(() => {
          setTimeout(() => {
            this.loadAnnotations();
          }, 2500)

          this.msg.showMesageFull(
            this.cs.MESAGE.ANOTACAO_DELETE,
            this.cs.TYPES_MESAGE.SUCCESS,
            this.cs.TIMES[25]
          );
        });
      }
    });
  }

  editItem(itemValue: Annotations): void {
    let dialogRef = this.annotationsDialog.open(DialogsComponent, {
      data: [{
        id: itemValue.id,
        title: itemValue.title,
        content: itemValue.content,
        data: itemValue.data
    },{action: "UPDATE"}]});
    dialogRef.afterClosed().subscribe(annotation => {
      if (annotation !== undefined) {
        this.annotationsService.read().subscribe(() => {
          setTimeout(() => {
            this.loadAnnotations();
          }, 2500)

          this.msg.showMesageFull(
            this.cs.MESAGE.ANOTACAO_UPDATE,
            this.cs.TYPES_MESAGE.SUCCESS,
            this.cs.TIMES[25]
          );
        });
      }
    });
  }

  ordemDecrescente(a: any, b: any): any {
    let result = a.data < b.data ? 1 : 0;
    return a.data > b.data ? -1 : result
  }
}