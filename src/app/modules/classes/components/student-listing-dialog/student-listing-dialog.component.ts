import { Component, Inject } from '@angular/core';
import { Class } from '../../../../shared/models/class.model';
import { Student } from '../../../../shared/models/student.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClassState } from '../../../../core/store/reducers/class.reducer';
import { State, Store } from '@ngrx/store';

@Component({
  selector: 'app-student-listing-dialog',
  templateUrl: './student-listing-dialog.component.html',
  styleUrl: './student-listing-dialog.component.scss',
})
export class StudentListingDialogComponent {
  students: Student[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Class,
    public dialogRef: MatDialogRef<StudentListingDialogComponent>,
    private studentStore: Store<State<ClassState>>
  ) {}

  ngOnInit(): void {
    this.students = this.data.students;
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
