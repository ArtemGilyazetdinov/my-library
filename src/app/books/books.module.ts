import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';

import { EditBookComponent } from './edit-book/edit-book.component';
import { BooksComponent } from './books.component';
import { BookSearchComponent } from '../controls/book-search/book-search.component';
import { BookFiltersComponent } from '../controls/book-filters/book-filters.component';
import { BookCardComponent } from './book-card/book-card.component'

@NgModule({
  declarations: [
    BooksComponent,
    EditBookComponent,
    BookSearchComponent,
    BookFiltersComponent,
    BookCardComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
  ]
})
export class BooksModule { }
