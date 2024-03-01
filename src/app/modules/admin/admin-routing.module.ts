import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDasboerdComponent } from './components/admin-dasboerd/admin-dasboerd.component';
import { BooksComponent } from './components/books/books.component';
import { AddBookComponent } from './components/add-book/add-book.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDasboerdComponent,
    children: [
      { path: 'books', component: BooksComponent },
      { path: 'add-book', component: AddBookComponent },
      { path: '', redirectTo: '/admin/books', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
