import { Component, Inject } from '@angular/core';
import { Class } from '../../../../shared/models/class.model';
import { Student } from '../../../../shared/models/student.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClassState } from '../../../../core/store/reducers/class.reducer';
import { State, Store } from '@ngrx/store';
import { DialogHandleStudentsModal } from '../../../../shared/models/dialogHandleStudents.modal';

@Component({
  selector: 'app-student-listing-dialog',
  templateUrl: './student-listing-dialog.component.html',
  styleUrl: './student-listing-dialog.component.scss',
})
export class StudentListingDialogComponent {
  students: Student[] = [];
  classs: Class = {
    classCode: '',
    title: '',
    description: '',
    students: [],
  };
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogHandleStudentsModal,
    public dialogRef: MatDialogRef<StudentListingDialogComponent>,
    private classStore: Store<State<ClassState>>
  ) {}

  ngOnInit(): void {
    this.students = this.data.classs.students;
    this.classs = this.data.classs;
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
