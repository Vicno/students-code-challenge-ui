import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';
import { State, Store } from '@ngrx/store';
import { StudentState } from '../../../../core/store/reducers/student.reducer';
import { Student } from '../../../../shared/models/student.model';
import {
  getStudents,
  updateStudent,
} from '../../../../core/store/actions/student.action';

@Component({
  selector: 'app-update-student-dialog',
  templateUrl: './update-student-dialog.component.html',
  styleUrl: './update-student-dialog.component.scss',
})
export class UpdateStudentDialogComponent implements OnInit {
  name: string = '';
  lastName: string = '';
  id: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddStudentDialogComponent>,
    private studentStore: Store<State<StudentState>>
  ) {}

  ngOnInit(): void {
    console.log(`data: ${this.data}`);
    this.id = this.data.id;
    console.log(`User ID: ${this.id}`);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    if (this.validateFields()) {
      var newStudent: Student = {
        id: '',
        name: this.name,
        lastName: this.lastName,
      };
      this.studentStore.dispatch(updateStudent({ student: newStudent }));
      this.studentStore.dispatch(getStudents());
      this.dialogRef.close();
    }
  }

  validateFields(): boolean {
    return (
      this.name !== null &&
      this.name !== '' &&
      this.lastName !== null &&
      this.lastName !== ''
    );
  }
}
