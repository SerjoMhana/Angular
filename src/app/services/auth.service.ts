import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ username, password }: any): Observable<any> {
    if (username === 'Angular-Course' && password === 'Asaryasoft') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Seraj', email: 'admin@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }
}
