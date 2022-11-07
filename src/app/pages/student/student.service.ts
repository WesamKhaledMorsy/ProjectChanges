import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
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
        ('https://localhost:7115/api/Student/CreateNewStudent',student,{headers:headers});

  }

  public getStudentById(id:string) : Observable <any>{
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    let url="https://localhost:7115/api/Student/GetStudentById";
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
    let url="https://localhost:7115/api/Student/GetStudentByUserName";
    if (userName!="")
      url += `?id=${userName.toString()}`

    return this.http.get<Student>(
      url,{headers:headers}
    );
  }

  public UpdateStudent(student: Student): Observable<Student[]> {
    const headers = new HttpHeaders({
      Authorization :`Bearer ${localStorage.getItem('jwt')}`,
    });
    return this.http.put<Student[]>(
      "https://localhost:7115/api/Student/EditStudent",
      student ,{headers:headers}
    );
  }
}
