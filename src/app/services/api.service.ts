import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // private apiUrl = '/Controller/add_new_book';
  // constructor(private http: HttpClient) {}
  // sendData(data: any) {
  //   return this.http.post(this.apiUrl, data);
  // }
  constructor(private _http: HttpClient) {}

  addBooks(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/Books', data);
  }

  getBooks(): Observable<any> {
    return this._http.get('http://localhost:3000/Books');
  }

  deleteBook(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/Books/${id}`);
  }

  updateBook(id: number, updatedData: any): Observable<any> {
    return this._http.put(`http://localhost:3000/Books/${id}`, updatedData);
  }
}
