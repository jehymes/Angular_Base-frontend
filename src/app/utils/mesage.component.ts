import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class Mesage {
  constructor(private snackBar: MatSnackBar) {}

  showMesageFull = (msg: string, type: string, times: number): void => {
    if (type === "SUCCESS") {
        this.snackBar.open(msg,"✔",{
            duration: times,
            horizontalPosition: "right",
            verticalPosition:"top",
            panelClass: ['msg-success']
        });
    } else if (type === "CANCEL") {
      this.snackBar.open(msg, "↺", {
        duration: times,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: ['msg-cancel']
      });
    } else {
        this.snackBar.open(msg, "✖", {
            duration: times,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: ['msg-error']
          });
    }
  };

  showMesageNoTimes = (msg: string, type: string): void => {
    if (type === "SUCCESS") {
        this.snackBar.open(msg,"✔",{
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition:"top",
            panelClass: ['msg-success']
        });
    } else if (type === "CANCEL") {
      this.snackBar.open(msg, "↺", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: ['msg-cancel']
      });
    } else {
        this.snackBar.open(msg, "✖", {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: ['msg-error']
          });
    }
  };

  showMesageNoType = (msg: string, times: number): void => {
    this.snackBar.open(msg, "✖", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
  };

  showMesageDefeault = (msg: string): void => {
    this.snackBar.open(msg, "", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
  };
}
