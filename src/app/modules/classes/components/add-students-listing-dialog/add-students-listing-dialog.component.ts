import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store, State } from '@ngrx/store';
import { ClassState } from '../../../../core/store/reducers/class.reducer';
import { Class } from '../../../../shared/models/class.model';
import { Student } from '../../../../shared/models/student.model';
import { DialogHandleStudentsModal } from '../../../../shared/models/dialogHandleStudents.modal';
import {
  addStudentToClass,
  removeStudentFromClass,
} from '../../../../core/store/actions/class.action';

@Component({
  selector: 'app-add-students-listing-dialog',
  templateUrl: './add-students-listing-dialog.component.html',
  styleUrls: ['./add-students-listing-dialog.component.scss'],
})
export class AddStudentsListingDialogComponent {
  students: Student[] = [];
  classs: Class = {
    classCode: '',
    title: '',
    description: '',
    students: [],
  };
  selectedStudents: Set<Student> = new Set();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogHandleStudentsModal,
    public dialogRef: MatDialogRef<AddStudentsListingDialogComponent>,
    private classStore: Store<State<ClassState>>
  ) {}

  ngOnInit(): void {
    this.students = this.data.students.filter(
      (student) =>
        !this.data.classs.students.some(
          (classStudent) => classStudent.id === student.id
        )
    );
    this.classs = this.data.classs;
  }

  toggleStudentSelection(student: Student): void {
    if (this.selectedStudents.has(student)) {
      this.selectedStudents.delete(student);
    } else {
      this.selectedStudents.add(student);
    }
  }

  isStudentSelected(student: Student): boolean {
    return this.selectedStudents.has(student);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onAddStudents(): void {
    const studentsArray = Array.from(this.selectedStudents);
    studentsArray.forEach((student, index) => {
      this.classStore.dispatch(
        addStudentToClass({ class: this.classs, student })
      );
      if (index === studentsArray.length - 1) {
        this.dialogRef.close();
      }
    });
  }
}
