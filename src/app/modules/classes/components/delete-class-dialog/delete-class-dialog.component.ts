import { Component, Inject, OnInit } from '@angular/core';
import { Class } from '../../../../shared/models/class.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddStudentDialogComponent } from '../../../students/components/add-student-dialog/add-student-dialog.component';
import { State, Store } from '@ngrx/store';
import { ClassState } from '../../../../core/store/reducers/class.reducer';
import { DialogClassModal } from '../../../../shared/models/dialogClass.modal';
import {
  deleteClass,
  getClasses,
} from '../../../../core/store/actions/class.action';

@Component({
  selector: 'app-delete-class-dialog',
  templateUrl: './delete-class-dialog.component.html',
  styleUrl: './delete-class-dialog.component.scss',
})
export class DeleteClassDialogComponent implements OnInit {
  title: string = '';
  description: string = '';
  classCode: string = '';
  classs: Class = {
    classCode: '',
    title: '',
    description: '',
    students: [],
  };
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogClassModal,
    public dialogRef: MatDialogRef<AddStudentDialogComponent>,
    private studentStore: Store<State<ClassState>>
  ) {}

  ngOnInit(): void {
    this.classCode = this.data.classCode;
    this.title = this.data.classs.title;
    this.description = this.data.classs.description;
    this.classs = this.data.classs;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onDelete(): void {
    this.studentStore.dispatch(deleteClass({ class: this.classs }));
    this.studentStore.dispatch(getClasses());
    this.dialogRef.close();
  }
}
