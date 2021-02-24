import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Book } from './shared/books.object';
import { BooksService } from './shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books$: Observable<Book[]>;
  selectedId: number;

  constructor(
    private bookService: BooksService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.books$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.bookService.getBooks();
      })
    )
  }



}
