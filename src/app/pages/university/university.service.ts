import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { helper } from 'echarts';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
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
        (`${environment.apiUrl}/api/University/CreateNewUniversity`,university,{headers:headers});

  }

  public getUniversityById(id:string) : Observable <any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url=`${environment.apiUrl}/api/University/GetUniversityById`;
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
      `${environment.apiUrl}/api/University/EditUniversity`,
      university ,{headers:headers}
    );
  }
}
