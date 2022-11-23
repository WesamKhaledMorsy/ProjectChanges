import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  Students =[];
  constructor(private http :HttpClient) { }

  public createStudent (student :Student): Observable<Student []> {
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    student.id  ;
    return this.http.post<Student[]>
        (`${environment.apiUrl}/api/Student/CreateNewStudent`,student,{headers:headers});

  }

  public getStudentById(id:string) : Observable <any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url=`${environment.apiUrl}/api/Student/GetStudentById`;
    if (id!="")
      url += `?id=${id.toString()}`

    return this.http.get<Student>(
      url,{headers:headers}
    );
  }

  //https://localhost:7115/api/Student/GetStudentByUserName

  public GetStudentByUserName(userName:string) : Observable <any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url=`${environment.apiUrl}/api/Student/GetStudentByUserName`;
    if (userName!="")
      url += `?id=${userName.toString()}`

    return this.http.get<Student>(
      url,{headers:headers}
    );
  }
  public GetStudentByUserId(userId:string) : Observable <any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url=`${environment.apiUrl}/api/Student/GetStudentByUserId`;
    if (userId!="")
      url += `?id=${userId.toString()}`

    return this.http.get<Student>(
      url,{headers:headers}
    );
  }

  userId :string = localStorage.getItem('userId');
  public getStudentByUserId(id:string) : Observable <any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url=`${environment.apiUrl}/api/Student/GetStudentByUserId`;
    if (id!="")
      url += `?id=${id}`
      console.log(id);
    return this.http.get<Student>(
      url,{headers:headers}
    );
  }

  public UpdateStudent(student: Student): Observable<Student[]> {
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    return this.http.put<Student[]>(
      `${environment.apiUrl}/api/Student/EditStudent`,
      student ,{headers:headers}
    );
  }
}
