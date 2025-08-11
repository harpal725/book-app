import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AddBookComponent } from './components/add-book/add-book.component';

export const routes: Routes = [
  { path: '', redirectTo: 'booklist', pathMatch: 'full' },
  { path: 'booklist', component: BookListComponent },
  { path: 'bookdetails', component: BookDetailsComponent },
  { path: 'addbook', component: AddBookComponent },
  { path: 'bookdetails/:id', component: BookDetailsComponent }
];
