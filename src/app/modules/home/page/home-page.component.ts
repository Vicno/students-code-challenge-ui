import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../../shared/models/student.model';
import { State, Store } from '@ngrx/store';
import { selectAllStudents } from '../../../core/store/selectors/student.selector';
import {
  initialStudentState,
  StudentState,
} from '../../../core/store/reducers/student.reducer';
import { getStudents } from '../../../core/store/actions/student.action';
import { Class } from '../../../shared/models/class.model';
import { selectAllClasses } from '../../../core/store/selectors/class.selector';
import {
  ClassState,
  initialClassState,
} from '../../../core/store/reducers/class.reducer';
import { getClasses } from '../../../core/store/actions/class.action';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
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
}
