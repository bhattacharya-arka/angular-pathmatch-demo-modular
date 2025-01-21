import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, map, catchError, of } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserExistsGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const id = Number(route.paramMap.get('id'));
    
    // Check if id is valid number and exists in allowed range
    if (isNaN(id) || id < 1 || id > 1) {  // Only allowing user with ID 1
      this.router.navigate(['/not-found']);
      return of(false);
    }

    return this.userService.getUserById(id).pipe(
      map(user => {
        if (!user || user.id !== 1) {  // Strictly checking for user 1
          this.router.navigate(['/not-found']);
          return false;
        }
        return true;
      }),
      catchError(() => {
        this.router.navigate(['/not-found']);
        return of(false);
      })
    );
  }
}