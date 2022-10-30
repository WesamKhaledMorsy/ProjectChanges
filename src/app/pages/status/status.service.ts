import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Status } from './status.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  Status =[];
  constructor(private http :HttpClient) { }

  public createStatus (status :Status): Observable<Status []> {
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    status.id  ;
    return this.http.post<Status[]>
        ('https://localhost:7115/api/Status/CreateNewStatus',status,{headers:headers});

  }

  public getStatusById(id:string) : Observable <any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url="https://localhost:7115/api/Status/GetStatusById";
    if (id!="")
      url += `?id=${id.toString()}`

    return this.http.get<Status>(
      url,{headers:headers}
    );
  }

  public UpdateStatus(status: Status): Observable<Status[]> {
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    return this.http.put<Status[]>(
      "https://localhost:7115/api/Status/EditStatus",
      status ,{headers:headers}
    );
  }
}
