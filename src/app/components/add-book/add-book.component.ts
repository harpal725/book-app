import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

   book: Book[] =[];
  
  submitbookform(form: NgForm){

  }

}
