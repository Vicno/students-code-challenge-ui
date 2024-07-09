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
    private classStore: Store<State<ClassState>>
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
}
