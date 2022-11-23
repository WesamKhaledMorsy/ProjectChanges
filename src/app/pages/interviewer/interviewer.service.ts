import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Interview } from '../interview/interview.model';
import { Interviewer } from './interviewer.model';

@Injectable({
  providedIn: 'root'
})
export class InterviewerService {
  Interviewer =[];
  constructor(private http :HttpClient) { }

  public createInterviewer (interviewer :Interviewer): Observable<Interviewer []> {
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    interviewer.id  ;
    return this.http.post<Interviewer[]>
        (`${environment.apiUrl}/api/Interviewer/CreateNewInterviewer`,interviewer,{headers:headers});

  }

  public getInterviewerById(id:string) : Observable <any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url=`${environment.apiUrl}/api/Interviewer/GetInterviewerById`;
    if (id!="")
      url += `?id=${id}`

    return this.http.get<Interviewer>(
      url,{headers:headers}
    );
  }

  public UpdateInterviewer(interviewer: Interviewer): Observable<Interviewer[]> {
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    return this.http.put<Interviewer[]>(
      `${environment.apiUrl}/api/Interviewer/EditInterviewer`,
      interviewer,{headers:headers}
    );
  }
}


