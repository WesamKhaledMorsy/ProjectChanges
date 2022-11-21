import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import'rxjs/RX';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http : HttpClient) { }
  storeServers(servers:any[])
  {
    const headers =new Headers({'Content-Type':'application/json'});
    return this.http.put(`${environment.apiUrl}/api/Auth/Register`,servers);
  }

  // getServers(){
  //   return this.http.get(`${environment.apiUrl}/api/Auth/Register`)
  //   .map(
  //     (response:Response)=>{
  //       const data = response.json();
  //       return data;
  //     }
  //   );
  // }
  // getAppName() {
  //   return this.http.get('https://udemy-ng-http.firebaseio.com/appName.json')
  //     .map(
  //       (response: Response) => {
  //         return response.json();
  //       }
  //     );
  // }

}
