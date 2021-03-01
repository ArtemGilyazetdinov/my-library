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

  editBook(book: Book): void {
    this.bookList = this.editBookList(book);
  }

  searchBooks(terms: string): Observable<Book[]> {
    const searchParams = terms;
    if (!searchParams.trim()) { return of([]); }
    return of(this.bookList);
  }


  byFieldReverse(field): any {
    return (a, b) => a[field] < b[field] ? 1 : -1;
  }

  sortBy(sortProp: string): void {
    this.bookList.sort(this.byField(sortProp));
  }

  private byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }


  private editBookList = (book: Book):Book[] => {
    const newBookList = this.bookList;
    const bookId = newBookList.findIndex((item) => item.id === book.id);
    const item = { ...newBookList[bookId] } ;

    return [
      ...newBookList.slice(0, bookId),
      item,
      ...newBookList.slice(bookId + 1)
    ];
  };
}
