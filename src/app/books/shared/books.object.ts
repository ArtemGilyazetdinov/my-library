export interface Book {
  id: number;
  author: string;
  title: string;
  publicationDate?: number;
  description: string;
  bookCover: string;
}

export class Book implements Book {
  id: number = null;
  author: string = null;
  title: string = null;
  publicationDate?: number = null;
  description: string = null;
  bookCover: string = null;
  constructor() {
  }
}
