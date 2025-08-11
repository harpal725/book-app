import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private GetBookApi = 'http://localhost:5000/api/BookStores';

  private PostBookApi = 'http://localhost:5000/api/BookStores'

  private DeletbookApi = 'http://localhost:5000/api/BookStores'


  constructor(private http: HttpClient) { }

  getbooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.GetBookApi);
  }

  creatBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.PostBookApi, book)
  }

  deleteBookById(id: number): Observable<any> {
    return this.http.delete(`${this.DeletbookApi}/${id}`)
  }

    getbooksbyid(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.GetBookApi}/${id}`);
  }

}
