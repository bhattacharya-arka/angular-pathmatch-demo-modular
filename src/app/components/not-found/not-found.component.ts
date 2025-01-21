import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="error-page">
      <h2>404 - Page Not Found</h2>
      <p>The requested page or user does not exist.</p>
      <p>Note: In this demo, only User 1 is accessible to demonstrate pathMatch behavior.</p>
      <div class="buttons">
        <button routerLink="/">Go Home</button>
        <button routerLink="/users">View Users List</button>
      </div>
    </div>
  `,
  styles: [`
    .error-page {
      text-align: center;
      padding: 20px;
    }
    .buttons {
      margin-top: 20px;
    }
    button {
      margin: 0 10px;
    }
  `]
})
export class NotFoundComponent {}
