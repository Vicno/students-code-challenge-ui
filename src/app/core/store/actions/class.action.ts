import { createAction, props } from '@ngrx/store';
import { Class } from '../../../shared/models/class.model';
import { Student } from '../../../shared/models/student.model';

export const getClasses = createAction('[Class Action] Get Classes');

export const getClassesSuccess = createAction(
  '[Class Action] Get Classes Success',
  props<{ classes: Class[] }>()
);

export const getClassesError = createAction(
  '[Class Action] Get Classes Error',
  props<{ error: any }>()
);

export const addClass = createAction(
  '[Class Action] Create Class',
  props<{ class: Class }>()
);

export const addClassesSuccess = createAction(
  '[Class Action] Add Class Success',
  props<{ class: Class }>()
);

export const addClassesError = createAction(
  '[Class Action] Add Class Error',
  props<{ error: any }>()
);

export const updateClass = createAction(
  '[Class Action] Update Class',
  props<{ class: Class }>()
);

export const updateClassSuccess = createAction(
  '[Class Action] Update Class Success',
  props<{ class: Class }>()
);

export const updateClassError = createAction(
  '[Class Action] Update Class Error',
  props<{ error: any }>()
);

export const deleteClass = createAction(
  '[Class Action] Delete Class',
  props<{ class: Class }>()
);

export const deleteClassSuccess = createAction(
  '[Class Action] Delete Class Success',
  props<{ class: Class }>()
);

export const deleteClassError = createAction(
  '[Class Action] Delete Class Error',
  props<{ error: any }>()
);

export const addStudentToClass = createAction(
  '[Class Action] Add Student To Class',
  props<{ class: Class; student: Student }>()
);

export const addStudentToClassSuccess = createAction(
  '[Class Action] Add Student To Class Success',
  props<{ class: Class }>()
);

export const addStudentToClassError = createAction(
  '[Class Action] Add Student To Class Error',
  props<{ error: any }>()
);

export const removeStudentFromClass = createAction(
  '[Class Action] Remove Student From Class',
  props<{ class: Class; student: Student }>()
);

export const removeStudentFromClassSuccess = createAction(
  '[Class Action] Remove Student From Class Success',
  props<{ class: Class }>()
);

export const removeStudentFromClassError = createAction(
  '[Class Action] Remove Student From Class Error',
  props<{ error: any }>()
);
