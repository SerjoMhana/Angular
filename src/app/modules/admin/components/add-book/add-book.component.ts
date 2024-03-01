import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent {
  bookform: FormGroup;

  constructor(private _fb: FormBuilder, private apiService: ApiService) {
    this.bookform = this._fb.group({
      Name: '',
      Quantity: '',
      Author: '',
    });
  }

  submitForm() {
    if (this.bookform.valid) {
      this.apiService.addBooks(this.bookform.value).subscribe({
        next: (val: any) => {
          alert('Books Add Successfully');
          this.bookform.reset();
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
  }
}
