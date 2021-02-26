import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../shared/books.object';

@Component({
  selector: 'app-selected-book',
  templateUrl: './selected-book.component.html',
  styleUrls: ['./selected-book.component.scss']
})
export class SelectedBookComponent implements OnInit {

  @Input() book: Book;

  constructor() { }

  ngOnInit(): void {
  }

}
