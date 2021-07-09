import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EMPTY, Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Annotations } from "src/app/models/anotations.model";
import { Constants } from "src/app/utils/constants.component";
import { Mesage } from "src/app/utils/mesage.component";

@Injectable({
  providedIn: "root",
})
export class AnnotationsService {
  constructor(
    private http: HttpClient,
    private cs: Constants,
    private msg: Mesage
  ) {}

  create(annotation: Annotations): Observable<Annotations> {
    return this.http
      .post<Annotations>(
        this.cs.BD_URL_LOCAL + this.cs.TABLES.ANNOTATIONS,
        annotation
      )
      .pipe(
        map((obj) => obj),
        catchError((erro) => this.errorHandler(erro))
      );
  }

  read(): Observable<Annotations[]> {
    return this.http
      .get<Annotations[]>(this.cs.BD_URL_LOCAL + this.cs.TABLES.ANNOTATIONS)
      .pipe(
        map((obj) => obj),
        catchError((erro) => this.errorHandler(erro))
      );
  }

  update(annotation: Annotations): Observable<Annotations> {
    const url: string = `${
      this.cs.BD_URL_LOCAL + this.cs.TABLES.ANNOTATIONS
    }/${annotation.id}`;
    return this.http.put<Annotations>(url, annotation).pipe(map(obj => obj), catchError(erro => this.errorHandler(erro))
    );
  }

  delete(id: number): Observable<Annotations> {
    const url: string = `${
      this.cs.BD_URL_LOCAL + this.cs.TABLES.ANNOTATIONS
    }/${id}`;
    return this.http.delete<Annotations>(url).pipe(
      map((obj) => obj),
      catchError((erro) => this.errorHandler(erro))
    );
  }

  errorHandler(e: any): Observable<any> {
    const cs = this.cs;
    this.msg.showMesageFull(
      cs.MESAGE.ERROR_HTTP,
      cs.TYPES_MESAGE.ERROR,
      cs.TIMES[25]
    );
    return EMPTY;
  }
}
