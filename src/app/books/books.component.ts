import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Book } from './shared/books.object';
// import { BooksService } from './shared/books.service';
import { BooksService } from './shared/book.firebase.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books$: Observable<Book[]>;
  bookList: Book[] = [];
  selectedId: number;
  selectedBook: Book = null;
  isSortedAscending = true;

  constructor(
    private bookService: BooksService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.books$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.bookService.getAllBooks();
      })
    );
  }

  selectBook(book: Book, event: Event): void {
    this.selectedBook = book;
  }

  onChangeSelect(book: Book): void {
    this.selectedBook = book;
  }

 public sortBy(sortProp: string): void {
    this.bookService.sortBy(sortProp);
  }

}
