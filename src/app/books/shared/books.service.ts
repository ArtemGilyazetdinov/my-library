import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './books.object';
import { BOOKS } from './mock-books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks():Observable<Book[]> {
    return of(BOOKS)
  };

  getBook(id: number):Observable<Book> {
    return this.getBooks().pipe(
      map((books: Book[])=> books.find(book => book.id === id))
    );
  }

  searchBooks(terms:string):Observable<Book[]> {
    console.log('terms',terms)
    const searchParams = terms;
    if (!searchParams.trim()) return of([]);
    return of(BOOKS)
  }
}
