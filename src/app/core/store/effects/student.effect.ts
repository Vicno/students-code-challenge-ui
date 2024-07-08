import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, switchMap, tap } from 'rxjs';
import { StudentService } from '../../services/student.service';
import { Store } from '@ngrx/store';
import {
  getStudents,
  getStudentsSuccess,
  getStudentsError,
  addStudent,
  addStudentSuccess,
  addStudentError,
  updateStudent,
  updateStudentSuccess,
  updateStudentError,
  deleteStudent,
  deleteStudentSuccess,
  deleteStudentError,
} from '../actions/student.action';
import { AppState } from '../state/app.state';

@Injectable()
export class StudentEffects {
  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getStudents),
      exhaustMap(() =>
        this.studentService.getAll().pipe(
          map((students) => getStudentsSuccess({ students: students.data })),
          catchError((error) =>
            of(getStudentsError({ error })).pipe(
              tap(() => console.log(`Error of type: ${error.name} \n Cause: `))
            )
          )
        )
      )
    )
  );

  addStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addStudent),
      exhaustMap(() =>
        this.studentService.getAll().pipe(
          map((students) => addStudentSuccess({ student: students.data[0] })),
          catchError((error) =>
            of(addStudentError({ error })).pipe(
              tap(() => console.log(`Error of type: ${error.name} \n Cause: `))
            )
          )
        )
      )
    )
  );

  updateStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateStudent),
      exhaustMap(() =>
        this.studentService.getAll().pipe(
          map((students) =>
            updateStudentSuccess({ student: students.data[0] })
          ),
          catchError((error) =>
            of(updateStudentError({ error })).pipe(
              tap(() => console.log(`Error of type: ${error.name} \n Cause: `))
            )
          )
        )
      )
    )
  );

  deleteStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteStudent),
      exhaustMap(() =>
        this.studentService.getAll().pipe(
          map((students) =>
            deleteStudentSuccess({ student: students.data[0] })
          ),
          catchError((error) =>
            of(deleteStudentError({ error })).pipe(
              tap(() => console.log(`Error of type: ${error.name} \n Cause: `))
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private studentService: StudentService,
    private store: Store<AppState>
  ) {}
}
