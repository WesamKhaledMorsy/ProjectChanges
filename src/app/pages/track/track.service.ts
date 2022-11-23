import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Track } from './track.model';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  Track =[];
  constructor(private http :HttpClient) { }

  public createTrack (track :Track): Observable<Track []> {
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    track.id  ;
    return this.http.post<Track[]>
        (`${environment.apiUrl}/api/Track/CreateNewTrack`,track,{headers:headers});

  }

  public getTrackById(id:string) : Observable <any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url=`${environment.apiUrl}/api/Track/GetTrackById`;
    if (id!="")
      url += `?id=${id}`

    return this.http.get<Track>(
      url,{headers:headers}
    );
  }

  public UpdateTrack(track: Track): Observable<Track[]> {
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    return this.http.put<Track[]>(
      `${environment.apiUrl}/api/Track/EditTrack`,
      track,{headers:headers}
    );
  }
}
