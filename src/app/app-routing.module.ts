import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'app', pathMatch: 'full'
  },{
    path: 'app', loadChildren: () => import('./layout/layout.module').then(mod => mod.LayoutModule)
    // path: 'app', loadChildren: './layout/layout.module#LayoutModule'
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
