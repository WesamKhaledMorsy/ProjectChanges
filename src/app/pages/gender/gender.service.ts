import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Gender } from './gender.model';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  Gender =[];
  constructor(private http :HttpClient) { }

  public createGender (gender :Gender): Observable<Gender []> {
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    gender.id  ;
    return this.http.post<Gender[]>
        ('https://localhost:7115/api/Gender/CreateNewGender',gender,{headers:headers});

  }

  public getGenderById(id:string) : Observable <any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url="https://localhost:7115/api/Gender/GetGenderById";
    if (id!="")
      url += `?id=${id.toString()}`

    return this.http.get<Gender>(
      url,{headers:headers}
    );
  }

  public UpdateGender(gender: Gender): Observable<Gender[]> {
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    return this.http.put<Gender[]>(
      "https://localhost:7115/api/Gender/EditGender",
      gender ,{headers:headers}
    );
  }
}
