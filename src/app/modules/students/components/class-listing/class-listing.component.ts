import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';
import { State, Store } from '@ngrx/store';
import { StudentState } from '../../../../core/store/reducers/student.reducer';
import { DialogClassListingModal } from '../../../../shared/models/dialogClassListing.modal';
import { Class } from '../../../../shared/models/class.model';

@Component({
  selector: 'app-class-listing',
  templateUrl: './class-listing.component.html',
  styleUrl: './class-listing.component.scss',
})
export class ClassListingComponent implements OnInit {
  studentId: string = '';
  classes: Class[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogClassListingModal,
    public dialogRef: MatDialogRef<AddStudentDialogComponent>,
    private studentStore: Store<State<StudentState>>
  ) {}

  ngOnInit(): void {
    this.studentId = this.data.studentId;
    this.classes = this.data.classes;
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
