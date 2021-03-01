import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { of, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Book } from '../shared/books.object';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  book = new Book();
  isEditingMode = true;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BooksService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.setupRouteParamsSubscription();
  }

  public editForm: FormGroup = this.formBuilder.group({
    id:                       [ '', [Validators.required, Validators.minLength(4)] ],
    author:                   [ null, [Validators.required] ],
    title:                    [ null, [Validators.required] ],
    description:              [ null, [Validators.required] ],
    bookCover:                [ null, [Validators.required] ],
    publicationDate:          [ null ],
  })

  onSubmit():void {
    if(!this.editForm.valid) {
      console.log("!this.editForm.valid");
      return;
    };
    const {
      id,
      author,
      title,
      description,
      bookCover,
      publicationDate
    } = this.editForm.getRawValue();

    const isEditBook = this.isEditingMode;

    this.book.id = id;
    this.book.author = author;
    this.book.title = title;
    this.book.description = description;
    this.book.bookCover = bookCover;
    this.book.publicationDate = publicationDate;

    isEditBook ? this.bookService.editBook(this.book) : this.bookService.addBook(this.book);

    this.router.navigate([ '/app/books' ])
  }

  loadBook(params: any) {
    if ('id' in params) {
      this.isEditingMode = true;
      return forkJoin([
        this.bookService.getBook(+params.id),
      ]
    ).pipe(
      map(([books]) => {
        this.book = books;
      })
    );
    } else {
      this.isEditingMode = false;
      return of(null);
    }
  }

  private setupRouteParamsSubscription() {
    this.route.params.pipe(
      switchMap(params => this.loadBook(params)),
    ).subscribe(() => {
      this.editForm.get('author').setValue(this.book.author);
      this.editForm.get('title').setValue(this.book.title);
      this.editForm.get('id').setValue(this.book.id);
      this.editForm.get('description').setValue(this.book.description);
      this.editForm.get('bookCover').setValue(this.book.bookCover);
      this.editForm.get('publicationDate').setValue(this.book.publicationDate);
    }, error => {
      console.error(error);
    });
  }

  get id() { return this.editForm.get('id'); }

  get author() { return this.editForm.get('author'); }

  get description() { return this.editForm.get('description'); }

  get bookCover() { return this.editForm.get('bookCover'); }

  get title() { return this.editForm.get('title'); }

}
