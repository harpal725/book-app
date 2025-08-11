import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookServiceService } from '../../book-service.service';
import { Book } from '../../models/Book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {

    selectedBook: Book | null = null;

  constructor(private route: ActivatedRoute, private bookservice: BookServiceService){
  }
  ngOnInit(): void {
     const bookparam = this.route.snapshot.paramMap.get('id');
     const bookid = Number(bookparam);
    this.getbookbyid(bookid);
    console.log('Select book id' , bookid)
  }

  getbookbyid(id : number){
    this.bookservice.getbooksbyid(id).subscribe(book =>{
      this.selectedBook =book
    })
  }

  update(id: number){
    
  }
  

}
