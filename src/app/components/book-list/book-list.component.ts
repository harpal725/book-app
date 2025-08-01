import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../../book-service.service';
import { Book } from '../../models/Book';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit{
  book: Book[] =[];

  constructor(private bookservice: BookServiceService){}

  ngOnInit(): void {
    this.bookservice.getbooks().subscribe(data => {this.book=data;
      console.log(this.book)
    })
  }

  searchbook= '';
  getseacrchbook() {
    return this.book.filter(b => b.title.toLocaleLowerCase().includes(this.searchbook.toLocaleLowerCase()))
  }

}