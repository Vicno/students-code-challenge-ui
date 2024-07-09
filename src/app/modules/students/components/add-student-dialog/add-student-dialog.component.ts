import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrl: './add-student-dialog.component.scss',
})
export class AddStudentDialogComponent implements OnInit {
  name: string = '';
  lastName: string = '';
  constructor(public dialogRef: MatDialogRef<AddStudentDialogComponent>) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onCreate(): void {}
}
