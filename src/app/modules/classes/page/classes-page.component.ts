import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../../shared/models/student.model';
import { selectAllStudents } from '../../../core/store/selectors/student.selector';
import { Class } from '../../../shared/models/class.model';
import { selectAllClasses } from '../../../core/store/selectors/class.selector';
import { State, Store } from '@ngrx/store';
import {
  initialStudentState,
  StudentState,
} from '../../../core/store/reducers/student.reducer';
import {
  ClassState,
  initialClassState,
} from '../../../core/store/reducers/class.reducer';
import { MatDialog } from '@angular/material/dialog';
import { getStudents } from '../../../core/store/actions/student.action';
import { getClasses } from '../../../core/store/actions/class.action';
import { AddClassDialogComponent } from '../components/add-class-dialog/add-class-dialog.component';
import { UpdateClassDialogComponent } from '../components/update-class-dialog/update-class-dialog.component';
import { DeleteClassDialogComponent } from '../components/delete-class-dialog/delete-class-dialog.component';
import { StudentListingDialogComponent } from '../components/student-listing-dialog/student-listing-dialog.component';

@Component({
  selector: 'app-classes-page',
  templateUrl: './classes-page.component.html',
  styleUrl: './classes-page.component.scss',
})
export class ClassesPageComponent implements OnInit {
  students$: Observable<Student[]> =
    this.studentStore.select(selectAllStudents);
  students: Student[] = [];

  classes$: Observable<Class[]> = this.classStore.select(selectAllClasses);
  classes: Class[] = [];
  searchTerm: string = '';

  constructor(
    private studentStore: Store<State<StudentState>>,
    private classStore: Store<State<ClassState>>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.studentStore.dispatch(getStudents());
    this.classStore.dispatch(getClasses());
    this.students$.subscribe((students) => {
      if (students !== initialStudentState.students) {
        this.students = students;
      }
    });

    this.classes$.subscribe((classes) => {
      if (classes !== initialClassState.classes) {
        this.classes = classes;
      }
    });
  }

  returnClassesPerStudent(student: Student): Class[] {
    let response: Class[] = [];
    this.classes.forEach((classs) => {
      if (
        classs.students.some((classStudent) => classStudent.id == student.id)
      ) {
        response.push(classs);
      }
    });
    return response;
  }

  isLastClass(currentClass: Class): boolean {
    const classes = this.classes;
    return classes[classes.length - 1] === currentClass;
  }

  public showClassesHandler(classs: Class) {
    const dialogRef = this.dialog.open(StudentListingDialogComponent, {
      width: '60rem',
      data: classs,
    });
  }

  public addHandler() {
    const dialogRef = this.dialog.open(AddClassDialogComponent, {
      width: '60rem',
    });
  }

  public updateHandler(classs: Class) {
    const dialogRef = this.dialog.open(UpdateClassDialogComponent, {
      width: '60rem',
      data: {
        classCode: classs.classCode,
        class: classs,
      },
    });
  }

  public deleteHandler(classs: Class) {
    const dialogRef = this.dialog.open(DeleteClassDialogComponent, {
      width: '60rem',
      data: {
        classCode: classs.classCode,
        classs: classs,
      },
    });
  }
}
