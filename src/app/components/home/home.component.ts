import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Welcome to PathMatch Demo</h1>
    <p>This demo shows the difference between pathMatch: 'full' and pathMatch: 'prefix'</p>
    <nav>
      <ul>
        <li><a routerLink="/users">View Users</a></li>
      </ul>
    </nav>
  `
})
export class HomeComponent {}