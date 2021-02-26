import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextMarkPipePipe } from './text-mark-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TextMarkPipePipe,
  ],
  exports: [
    CommonModule,
    TextMarkPipePipe,
  ]
})
export class BookCommonModule { }
