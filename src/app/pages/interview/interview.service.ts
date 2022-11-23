import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Interview } from '../interview/interview.model';
@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  Interview =[];
  constructor(private http :HttpClient) { }

  public createInterview (interview :Interview): Observable<Interview []> {
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    interview.id  ;
    return this.http.post<Interview[]>
        (`${environment.apiUrl}/api/Interview/CreateNewInterview`,interview,{headers:headers});

  }

  public getInterviewById(id:string) : Observable <any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url=`${environment.apiUrl}/api/Interview/GetInterviewById`;
    if (id!="")
      url += `?id=${id}`

    return this.http.get<Interview>(
      url,{headers:headers}
    );
  }

  public UpdateInterview(interview: Interview): Observable<Interview[]> {
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    return this.http.put<Interview[]>(
      `${environment.apiUrl}/api/Interview/EditInterview`,
      interview ,{headers:headers}
    );
  }
}



