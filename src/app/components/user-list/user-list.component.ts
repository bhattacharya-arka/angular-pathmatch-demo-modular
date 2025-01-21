import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  template: `
    <h2>User List</h2>
    <div class="alert">
      <p><strong>Demo Note:</strong> For demonstration purposes:</p>
      <ul>
        <li>User 1 is accessible (pathMatch example)</li>
        <li>User 2 will redirect to Not Found page</li>
      </ul>
    </div>
    <ul>
      <li *ngFor="let user of users">
        <a [routerLink]="['/users', user.id]">{{ user.name }} (ID: {{ user.id }})</a>
      </li>
    </ul>
    <button routerLink="/">Back to Home</button>
  `,
  styles: [`
    .alert {
      padding: 10px;
      background-color: #f8f9fa;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin: 10px 0;
    }
  `]
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }
}