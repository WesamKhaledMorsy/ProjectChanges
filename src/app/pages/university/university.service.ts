import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  public getUniversityById(id:number) : Observable <any>{
    let url="https://localhost:7115/api/University/GetUniversityById";
    if (id!=0)
      url += `?id=${id}`

    return this.http.get<University>(
      url
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
