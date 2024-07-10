import { Component, Inject } from '@angular/core';
import { Class } from '../../../../shared/models/class.model';
import { Student } from '../../../../shared/models/student.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClassState } from '../../../../core/store/reducers/class.reducer';
import { State, Store } from '@ngrx/store';
import { DialogHandleStudentsModal } from '../../../../shared/models/dialogHandleStudents.modal';
import { removeStudentFromClass } from '../../../../core/store/actions/class.action';

@Component({
  selector: 'app-student-listing-dialog',
  templateUrl: './student-listing-dialog.component.html',
  styleUrl: './student-listing-dialog.component.scss',
})
export class StudentListingDialogComponent {
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
    public dialogRef: MatDialogRef<StudentListingDialogComponent>,
    private classStore: Store<State<ClassState>>
  ) {}

  ngOnInit(): void {
    this.students = this.data.classs.students;
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

  onRemoveStudents(): void {
    const studentsArray = Array.from(this.selectedStudents);
    studentsArray.forEach((student, index) => {
      this.classStore.dispatch(
        removeStudentFromClass({ class: this.classs, student })
      );
      if (index === studentsArray.length - 1) {
        this.dialogRef.close();
      }
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
