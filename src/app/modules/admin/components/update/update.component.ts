import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-update',
  template: `
    <h2 mat-dialog-title>Edit Book</h2>
    <div mat-dialog-content>
      <form [formGroup]="bookForm">
        <mat-form-field>
          <input matInput formControlName="Name" placeholder="Name" />
        </mat-form-field>
        <mat-form-field>
          <input matInput formControlName="Quantity" placeholder="Quantity" />
        </mat-form-field>
        <mat-form-field>
          <input matInput formControlName="Author" placeholder="Author" />
        </mat-form-field>
      </form>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="cancel()">Cancel</button>
      <button mat-raised-button color="primary" (click)="save()">Save</button>
    </div>
  `,
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent {
  bookForm: FormGroup;
  @Output() bookUpdated = new EventEmitter();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UpdateComponent>,
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.bookForm = this.formBuilder.group({
      Name: [data.Name],
      Quantity: [data.Quantity],
      Author: [data.Author],
    });
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    const updatedData = this.bookForm.value;
    const bookId = this.data.id;

    this.apiService.updateBook(bookId, updatedData).subscribe({
      next: (res) => {
        alert('Book Updated Successfully');
        this.dialogRef.close();
        this.bookUpdated.emit(); // Emit the event to notify the main component
      },
      error: console.log,
    });
  }
}
