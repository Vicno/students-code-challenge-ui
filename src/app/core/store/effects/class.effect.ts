import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, of } from 'rxjs';
import { map, exhaustMap, catchError, switchMap, tap } from 'rxjs';
import { ClassService } from '../../services/class.service';
import { Store } from '@ngrx/store';
import {
  getClasses,
  getClassesSuccess,
  getClassesError,
  addClass,
  addClassesSuccess,
  addClassesError,
  updateClass,
  updateClassSuccess,
  updateClassError,
  deleteClass,
  deleteClassSuccess,
  deleteClassError,
  addStudentToClass,
  addStudentToClassSuccess,
  addStudentToClassError,
  removeStudentFromClass,
  removeStudentFromClassSuccess,
  removeStudentFromClassError,
} from '../actions/class.action';
import { AppState } from '../state/app.state';
import { Class } from '../../../shared/models/class.model';

@Injectable()
export class ClassEffects {
  loadClasses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getClasses),
      exhaustMap(() =>
        this.classService.getAll().pipe(
          map((classes) => getClassesSuccess({ classes: classes })),
          catchError((error) =>
            of(getClassesError({ error })).pipe(
              tap(() =>
                console.log(`Error of type: ${error.name} \n Cause: ${error}`)
              )
            )
          )
        )
      )
    )
  );

  addClass$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addClass),
      exhaustMap((action) =>
        this.classService.createClass(action.class).pipe(
          map((classs) => {
            classs.students = [];
            return addClassesSuccess({ class: classs });
          }),
          catchError((error) =>
            of(addClassesError({ error })).pipe(
              tap(() =>
                console.log(`Error of type: ${error.name} \n Cause: ${error} `)
              )
            )
          )
        )
      )
    )
  );

  updateClass$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateClass),
      exhaustMap((action) =>
        this.classService
          .updateClass(action.class.classCode, action.class)
          .pipe(
            map((classs) => updateClassSuccess({ class: classs })),
            catchError((error) =>
              of(updateClassError({ error })).pipe(
                tap(() =>
                  console.log(
                    `Error of type: ${error.name} \n Cause: ${error} `
                  )
                )
              )
            )
          )
      )
    )
  );

  deleteClass$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteClass),
      exhaustMap((action) =>
        this.classService.deleteClass(action.class.classCode).pipe(
          map((classs) => deleteClassSuccess({ class: classs })),
          catchError((error) =>
            of(deleteClassError({ error })).pipe(
              tap(() =>
                console.log(`Error of type: ${error.name} \n Cause: ${error}`)
              )
            )
          )
        )
      )
    )
  );

  addStudentToClass$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addStudentToClass),
      mergeMap((action) =>
        this.classService
          .addStudentToClass(action.class.classCode, action.student.id)
          .pipe(
            map((classs) => addStudentToClassSuccess({ class: classs })),
            catchError((error) =>
              of(addStudentToClassError({ error })).pipe(
                tap(() =>
                  console.log(`Error of type: ${error.name} \n Cause: ${error}`)
                )
              )
            )
          )
      )
    )
  );

  removeStudentFromClass$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeStudentFromClass),
      exhaustMap((action) =>
        this.classService
          .removeStudentFromClass(action.class.classCode, action.student.id)
          .pipe(
            map((classs) => removeStudentFromClassSuccess({ class: classs })),
            catchError((error) =>
              of(removeStudentFromClassError({ error })).pipe(
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
    private classService: ClassService,
    private store: Store<AppState>
  ) {}
}
