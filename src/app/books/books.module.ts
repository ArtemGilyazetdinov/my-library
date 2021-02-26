import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';

import { EditBookComponent } from './edit-book/edit-book.component';
import { BooksComponent } from './books.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookFiltersComponent } from './book-filters/book-filters.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookCommonModule } from '../common/common.module'

@NgModule({
  declarations: [
    BooksComponent,
    EditBookComponent,
    BookSearchComponent,
    BookFiltersComponent,
    BookCardComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    BookCommonModule
  ]
})
export class BooksModule { }
