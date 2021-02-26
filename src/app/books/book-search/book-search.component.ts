import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Book } from '../shared/books.object';
import { BooksService } from '../shared/books.service';
@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  books$: Observable<Book[]>;
  private searchParams$ = new Subject<string>();
  inputTerms = '';

  constructor(
    private bookService: BooksService,
  ) { }

  ngOnInit(): void {
    this.books$ = this.searchParams$.pipe(
      switchMap((value: string) => this.bookService.searchBooks(value))
    );
  }

  public onSearchInputChange($event: Event): void {
    const value = ($event.target as HTMLInputElement).value.toLowerCase().trim();
    this.inputTerms = value;
    this.searchParams$.next(value);
  }



}
