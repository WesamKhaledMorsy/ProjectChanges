import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Round } from './round.model';

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  Round =[];

  constructor(private http :HttpClient) { }

  public createRound (round :Round): Observable<Round []> {
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    round.id  ;
    return this.http.post<Round[]>
        (`${environment.apiUrl}/api/Round/CreateNewRound`,round,{headers:headers});

  }

  public getRoundById(id:string) : Observable <any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url=`${environment.apiUrl}/api/Round/GetRoundById`;
    if (id!="")
      url += `?id=${id}`

    return this.http.get<Round>(
      url,{headers:headers}
    );
  }

  public UpdateRound(round: Round): Observable<Round[]> {
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    return this.http.put<Round[]>(
      `${environment.apiUrl}/api/Round/EditRound`,
      round,{headers:headers}
    );
  }
}
