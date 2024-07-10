import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';
import { State, Store } from '@ngrx/store';
import { StudentState } from '../../../../core/store/reducers/student.reducer';
import { Student } from '../../../../shared/models/student.model';
import {
  deleteStudent,
  getStudents,
} from '../../../../core/store/actions/student.action';
import { DialogStudentsModal } from '../../../../shared/models/dialogStudents.modal';

@Component({
  selector: 'app-delete-student-dialog',
  templateUrl: './delete-student-dialog.component.html',
  styleUrl: './delete-student-dialog.component.scss',
})
export class DeleteStudentDialogComponent implements OnInit {
  name: string = '';
  lastName: string = '';
  id: string = '';
  student: Student = {
    id: '',
    name: '',
    lastName: '',
  };
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogStudentsModal,
    public dialogRef: MatDialogRef<AddStudentDialogComponent>,
    private studentStore: Store<State<StudentState>>
  ) {}

  ngOnInit(): void {
    this.id = this.data.id;
    this.name = this.data.student.name;
    this.lastName = this.data.student.lastName;
    this.student = this.data.student;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onDelete(): void {
    this.studentStore.dispatch(deleteStudent({ student: this.student }));
    this.studentStore.dispatch(getStudents());
    this.dialogRef.close();
  }
}
