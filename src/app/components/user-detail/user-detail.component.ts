import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  template: `
    <div *ngIf="user">
      <h2>User Details</h2>
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <button routerLink="/users">Back to Users</button>
    </div>
    <div *ngIf="error">
      {{ error }}
    </div>
  `
})
export class UserDetailComponent implements OnInit {
  user?: User;
  error?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.userService.getUserById(id).pipe(
        catchError(error => {
          this.error = error.message;
          this.router.navigate(['/not-found']);
          throw error;
        })
      ).subscribe(user => this.user = user);
    });
  }
}