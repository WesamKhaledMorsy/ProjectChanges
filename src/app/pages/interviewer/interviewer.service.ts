import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
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
        ('https://localhost:7115/api/Interviewer/CreateNewInterviewer',interviewer,{headers:headers});

  }

  public getInterviewerById(id:string) : Observable <any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url="https://localhost:7115/api/Interviewer/GetInterviewerById";
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
      "https://localhost:7115/api/Interviewer/EditInterviewer",
      interviewer,{headers:headers}
    );
  }
}


