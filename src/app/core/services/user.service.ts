import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User, users } from '../models/auth.models';
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class UserProfileService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/api/login`);
    }

    register(user: User) {
        return this.http.post(`/users/register`, user);
    }

  getByEmail(email: string): Observable<User | undefined> {
    const user = users.find(user => user.email === email);
    return of(user).pipe(delay(500));
  }
}
