import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [LayoutComponent, NavbarComponent],
  imports: [
    LayoutRoutingModule,
    CommonModule
  ]
})
export class LayoutModule { }
