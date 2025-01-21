import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserExistsGuard } from './guards/user-exists.guard';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    pathMatch: 'full'
  },
  { 
    path: 'users', 
    component: UserListComponent,
    pathMatch: 'full'  // Changed to full match
  },
  { 
    path: 'users/:id', 
    component: UserDetailComponent,
    canActivate: [UserExistsGuard],
    pathMatch: 'full'  // Added full match here too
  },
  { 
    path: 'not-found', 
    component: NotFoundComponent,
    pathMatch: 'full'
  },
  { 
    path: '**', 
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }