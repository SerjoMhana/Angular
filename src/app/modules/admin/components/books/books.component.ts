import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { AddBookComponent } from '../add-book/add-book.component';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'bookName',
    'quantity',
    'Author',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private apiService: ApiService, private _dialog: MatDialog) {}

  ngOnInit(): void {
    this.getBookdata();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // ======================
  getBookdata() {
    // Fetch data from the API
    this.apiService.getBooks().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  // ========================
  DELETEBOOK(id: number) {
    this.apiService.deleteBook(id).subscribe({
      next: (res) => {
        alert('Book Deleted Successful');
        this.getBookdata();
      },
      error: console.log,
    });
  }

  openUpdateDialog(book: any) {
    const dialogRef = this._dialog.open(UpdateComponent, {
      data: book,
    });

    dialogRef.componentInstance.bookUpdated.subscribe(() => {
      // Refresh the table data after the book is updated
      this.getBookdata();
    });
  }
}
