import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';
import { State, Store } from '@ngrx/store';
import { StudentState } from '../../../../core/store/reducers/student.reducer';
import { Student } from '../../../../shared/models/student.model';
import {
  addStudent,
  getStudents,
} from '../../../../core/store/actions/student.action';

@Component({
  selector: 'app-delete-student-dialog',
  templateUrl: './delete-student-dialog.component.html',
  styleUrl: './delete-student-dialog.component.scss',
})
export class DeleteStudentDialogComponent {
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
