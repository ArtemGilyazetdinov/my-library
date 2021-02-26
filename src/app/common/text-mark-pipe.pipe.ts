import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textMarkPipe'
})
export class TextMarkPipePipe implements PipeTransform {

  private insertMark(value:string, len: number, index: number ): string {
    const newValue = [
      value.slice(0, index),
      `<mark>${value.slice(index, index + len) }</mark>`,
      value.slice(index + len),
    ];

    return newValue.join('');
  };

  transform(value: string, args: string[]): unknown {
    const inputTerms = args[0];
    const idx = value.toLowerCase().search(inputTerms);

    if( idx === -1 ) {
      return value;
    };

    return this.insertMark(value, inputTerms.length, idx);
  };
};
