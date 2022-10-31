import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Grade } from './grade.model';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  Grade =[];
  constructor(private http :HttpClient) { }

  public createGrade (grade :Grade): Observable<Grade []> {
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    grade.id  ;
    return this.http.post<Grade[]>
        ('https://localhost:7115/api/Grade/CreateNewGrade',grade,{headers:headers});

  }

  public getGradeById(id:string) : Observable <any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url="https://localhost:7115/api/Grade/GetGradeById";
    if (id!="")
      url += `?id=${id.toString()}`

    return this.http.get<Grade>(
      url,{headers:headers}
    );
  }

  public UpdateGrade(grade: Grade): Observable<Grade[]> {
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    return this.http.put<Grade[]>(
      "https://localhost:7115/api/Grade/EditGrade",
      grade ,{headers:headers}
    );
  }
}
