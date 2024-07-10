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
          map((students) => {
            return getStudentsSuccess({ students: students });
          }),
          catchError((error) =>
            of(getStudentsError({ error })).pipe(
              tap(() =>
                console.log(`Error of type: ${error.name} \n Cause: ${error}`)
              )
            )
          )
        )
      )
    )
  );

  addStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addStudent),
      exhaustMap((action) =>
        this.studentService.createStudent(action.student).pipe(
          map((student) => addStudentSuccess({ student: student })),
          catchError((error) =>
            of(addStudentError({ error })).pipe(
              tap(() =>
                console.log(`Error of type: ${error.name} \n Cause: ${error}`)
              )
            )
          )
        )
      )
    )
  );

  updateStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateStudent),
      exhaustMap((action) =>
        this.studentService
          .updateStudent(action.student.id, action.student)
          .pipe(
            map((student) => updateStudentSuccess({ student: student })),
            catchError((error) =>
              of(updateStudentError({ error })).pipe(
                tap(() =>
                  console.log(`Error of type: ${error.name} \n Cause: ${error}`)
                )
              )
            )
          )
      )
    )
  );

  deleteStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteStudent),
      exhaustMap((action) =>
        this.studentService.deleteStudent(action.student.id).pipe(
          map((student) => deleteStudentSuccess({ student: student })),
          catchError((error) =>
            of(deleteStudentError({ error })).pipe(
              tap(() =>
                console.log(`Error of type: ${error.name} \n Cause: ${error}`)
              )
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
