import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../shared/books.object';

@Component({
  selector: 'app-book-filters',
  templateUrl: './book-filters.component.html',
  styleUrls: ['./book-filters.component.scss']
})
export class BookFiltersComponent implements OnInit {

  sortedBy: string = null;
  isSortedAscending = true;
  selectedBook: Book = null;

  @Input() books: Book[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  selectBook(book: Book, event: Event): void {
    this.selectedBook = book;
  }

  sortBy(sortProp: string): void{
    this.sortedBy = sortProp;
    this.isSortedAscending = !this.isSortedAscending;
  }
}
