import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddClassDialogComponent } from '../add-class-dialog/add-class-dialog.component';
import { State, Store } from '@ngrx/store';
import { ClassState } from '../../../../core/store/reducers/class.reducer';
import { Class } from '../../../../shared/models/class.model';
import {
  getClasses,
  updateClass,
} from '../../../../core/store/actions/class.action';
import { DialogClassModal } from '../../../../shared/models/dialogClass.modal';

@Component({
  selector: 'app-update-class-dialog',
  templateUrl: './update-class-dialog.component.html',
  styleUrl: './update-class-dialog.component.scss',
})
export class UpdateClassDialogComponent implements OnInit {
  classCode: string = '';
  title: string = '';
  description: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogClassModal,
    public dialogRef: MatDialogRef<AddClassDialogComponent>,
    private classStore: Store<State<ClassState>>
  ) {}

  ngOnInit(): void {
    this.classCode = this.data.classCode;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    if (this.validateFields()) {
      var newClass: Class = {
        classCode: this.classCode,
        title: this.title,
        description: this.description,
        students: [],
      };
      this.classStore.dispatch(updateClass({ class: newClass }));
      this.classStore.dispatch(getClasses());
      this.dialogRef.close();
    }
  }

  validateFields(): boolean {
    return (
      this.title !== null &&
      this.title !== '' &&
      this.description !== null &&
      this.description !== ''
    );
  }
}
