import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogsComponent } from "src/app/components/dialogs/dialogs.component";
import { HeaderService } from "src/app/components/template/header/header.service";
import { Constants } from "src/app/utils/constants.component";
import { Mesage } from "src/app/utils/mesage.component";
import { AnnotationsService } from "./annotations.service";

@Component({
  selector: "app-annotations",
  templateUrl: "./annotations.component.html",
  styleUrls: ["./annotations.component.css"],
})
export class AnnotationsComponent implements OnInit {
  annotations: any[] = [];

  constructor(
    private headerService: HeaderService,
    private dialog: MatDialog,
    private annotationsService: AnnotationsService,
    private cs: Constants,
    private msg: Mesage
  ) {
    this.headerService.headerData = {
      title: "Anotações",
      icon: "note",
      routeURL: "/annotations",
    };
  }

  ngOnInit(): void {}

  createAnnotation(): void {
    let dialogRef = this.dialog.open(DialogsComponent, {
      data: [{},{action: "CREATE"}]});
    dialogRef.afterClosed().subscribe(annotation => {
      if (annotation !== undefined) {
        this.annotationsService.read().subscribe(() => {
          setTimeout(() => {
            location.reload()
          }, 2500)

          this.msg.showMesageFull(
            this.cs.MESAGE.ANOTACAO_SUCCESS,
            this.cs.TYPES_MESAGE.SUCCESS,
            this.cs.TIMES[25]
          );
        });
      }
    });
  }
}
