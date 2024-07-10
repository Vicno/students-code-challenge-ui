import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { State, Store } from '@ngrx/store';
import { Class } from '../../../../shared/models/class.model';
import {
  addClass,
  getClasses,
} from '../../../../core/store/actions/class.action';
import { ClassState } from '../../../../core/store/reducers/class.reducer';

@Component({
  selector: 'app-add-class-dialog',
  templateUrl: './add-class-dialog.component.html',
  styleUrl: './add-class-dialog.component.scss',
})
export class AddClassDialogComponent {
  title: string = '';
  description: string = '';
  constructor(
    public dialogRef: MatDialogRef<AddClassDialogComponent>,
    private classStore: Store<State<ClassState>>
  ) {}

  ngOnInit(): void {}

  onClose(): void {
    this.dialogRef.close();
  }

  onCreate(): void {
    if (this.validateFields()) {
      var newClass: Class = {
        classCode: '',
        title: this.title,
        description: this.description,
        students: [],
      };
      this.classStore.dispatch(addClass({ class: newClass }));
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
