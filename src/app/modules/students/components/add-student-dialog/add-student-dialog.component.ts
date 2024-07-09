import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../../../shared/models/student.model';
import { StudentState } from '../../../../core/store/reducers/student.reducer';
import { State, Store } from '@ngrx/store';
import {
  addStudent,
  getStudents,
} from '../../../../core/store/actions/student.action';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrl: './add-student-dialog.component.scss',
})
export class AddStudentDialogComponent implements OnInit {
  name: string = '';
  lastName: string = '';
  constructor(
    public dialogRef: MatDialogRef<AddStudentDialogComponent>,
    private studentStore: Store<State<StudentState>>
  ) {}

  ngOnInit(): void {}

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
      this.studentStore.dispatch(addStudent({ student: newStudent }));
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
