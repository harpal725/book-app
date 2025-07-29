import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private GetBookApi='https://localhost:7136/api/BookStores';

  constructor(private http: HttpClient) { }

  getbooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.GetBookApi);
  }
}
