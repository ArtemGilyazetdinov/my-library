import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './books.object';
import { BOOKS } from './mock-books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public bookList: Book[] = BOOKS;
  sortedBy: string = null;
  isSortedAscending = true;

  constructor() { }

  getBooks(): Observable<Book[]> {
    return of(this.bookList);
  }

  getBook(id: number): Observable<Book> {
    return this.getBooks().pipe(
      map((books: Book[]) => books.find(book => book.id === id))
    );
  }

  addBook(book: Book): void {
    this.bookList.push(book);
  }

  searchBooks(terms: string): Observable<Book[]> {
    const searchParams = terms;
    if (!searchParams.trim()) { return of([]); }
    return of(this.bookList);
  }

  byField(field): any {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }

  byFieldReverse(field): any {
    return (a, b) => a[field] < b[field] ? 1 : -1;
  }

  sortBy(sortProp: string): void{
    this.bookList.sort(this.byField(sortProp));
  }

}
