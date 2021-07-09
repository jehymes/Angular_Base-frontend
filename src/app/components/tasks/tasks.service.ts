import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Task } from "../../models/tasks.model";
import { EMPTY, Observable } from "rxjs";
import { Constants } from "src/app/utils/constants.component";
import { catchError, map } from "rxjs/operators";
import { Mesage } from "src/app/utils/mesage.component";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  constructor(private http: HttpClient, private cs: Constants, private msg: Mesage) {}

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(
      this.cs.BD_URL_LOCAL + this.cs.TABLES.TASKS,
      task
    ).pipe(map(obj => obj), catchError(erro => this.errorHandler(erro))
    );
  }

  read(): Observable<Task[]> {
    return this.http.get<Task[]>(
      this.cs.BD_URL_LOCAL + this.cs.TABLES.TASKS
    ).pipe(map(obj => obj), catchError(erro => this.errorHandler(erro))
    );
  }

  readById(id: number): Observable<Task> {
    const url: string = `${
      this.cs.BD_URL_LOCAL + this.cs.TABLES.TASKS
    }/${id}`;
    return this.http.get<Task>(url).pipe(map(obj => obj), catchError(erro => this.errorHandler(erro))
    );
  }

  update(task: Task): Observable<Task> {
    const url: string = `${
      this.cs.BD_URL_LOCAL + this.cs.TABLES.TASKS
    }/${task.id}`;
    return this.http.put<Task>(url, task).pipe(map(obj => obj), catchError(erro => this.errorHandler(erro))
    );
  }

  delete(id: number): Observable<Task> {
    const url: string = `${
      this.cs.BD_URL_LOCAL + this.cs.TABLES.TASKS
    }/${id}`;
    return this.http.delete<Task>(url).pipe(map(obj => obj), catchError(erro => this.errorHandler(erro))
    );
  }

  errorHandler(e: any): Observable<any> {
    const cs = this.cs;
    this.msg.showMesageFull(
      cs.MESAGE.ERROR_HTTP, 
      cs.TYPES_MESAGE.ERROR, 
      cs.TIMES[25]
      )
    return EMPTY;
  }
}
