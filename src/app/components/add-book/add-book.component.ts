import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../../models/Book';
import { BookServiceService } from '../../book-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css',
})
export class AddBookComponent {
  book: Book = {
    title: '',
    auther: '',
    genre: '',
    description: '',
    id: 0,
  };

  constructor(private bookservice: BookServiceService) {}

  submitbookform() {
    this.bookservice.creatBook(this.book).subscribe((response) => {
      console.log('book record submited');
      this.book = { title: '', auther: '', genre: '', description: '', id: 0 };
    });
  }
}
