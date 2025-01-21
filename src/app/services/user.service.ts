import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }  // Added back user 2
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);  // Show all users in list
  }

  getUserById(id: number): Observable<User> {
    if (id !== 1) {  // Still only allow accessing user 1
      return throwError(() => new Error('User not found'));
    }
    const user = this.users.find(user => user.id === 1);
    return of(user!);
  }
}