import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../../shared/models/student.model';
import { State, Store } from '@ngrx/store';
import {
  initialStudentState,
  StudentState,
} from '../../../core/store/reducers/student.reducer';
import { selectAllStudents } from '../../../core/store/selectors/student.selector';
import { getStudents } from '../../../core/store/actions/student.action';
import { selectAllClasses } from '../../../core/store/selectors/class.selector';
import { Class } from '../../../shared/models/class.model';
import {
  ClassState,
  initialClassState,
} from '../../../core/store/reducers/class.reducer';
import { getClasses } from '../../../core/store/actions/class.action';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialogComponent } from '../components/add-student-dialog/add-student-dialog.component';
import { UpdateStudentDialogComponent } from '../components/update-student-dialog/update-student-dialog.component';
import { DeleteStudentDialogComponent } from '../components/delete-student-dialog/delete-student-dialog.component';
import { ClassListingComponent } from '../components/class-listing/class-listing.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.scss',
})
export class StudentsPageComponent {
  students$: Observable<Student[]> =
    this.studentStore.select(selectAllStudents);
  students: Student[] = [];

  classes$: Observable<Class[]> = this.classStore.select(selectAllClasses);
  classes: Class[] = [];

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
  getNumberOfClasses(student: Student): Number {
    var classes = this.returnClassesPerStudent(student);
    return classes.length;
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

  public showClassesHandler(student: Student) {
    const dialogRef = this.dialog.open(ClassListingComponent, {
      width: '60rem',
      data: {
        studentId: student.id,
        classes: this.returnClassesPerStudent(student),
      },
    });
  }

  public addHandler() {
    const dialogRef = this.dialog.open(AddStudentDialogComponent, {
      width: '60rem',
    });
  }

  public updateHandler(student: Student) {
    const dialogRef = this.dialog.open(UpdateStudentDialogComponent, {
      width: '60rem',
      data: {
        id: student.id,
        student: student,
      },
    });
  }

  public deleteHandler(student: Student) {
    const dialogRef = this.dialog.open(DeleteStudentDialogComponent, {
      width: '60rem',
      data: {
        id: student.id,
        student: student,
      },
    });
  }
}
