import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { helper } from 'echarts';
import { Observable } from 'rxjs/internal/Observable';
import { University } from './university.model';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  University =[];
  constructor(private http :HttpClient) { }

  public createUniversity (university :University): Observable<University []> {
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    university.id  ;
    return this.http.post<University[]>
        ('https://localhost:7115/api/University/CreateNewUniversity',university,{headers:headers});

  }

  public getUniversityById(id:string) : Observable <any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url="https://localhost:7115/api/University/GetUniversityById";
    if (id!="")
      url += `?id=${id.toString()}`

    return this.http.get<University>(
      url,{headers:headers}
    );
  }

  public UpdateUniversity(university: University): Observable<University[]> {
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    return this.http.put<University[]>(
      "https://localhost:7115/api/University/EditUniversity",
      university ,{headers:headers}
    );
  }
}
