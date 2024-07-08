import { createAction, props } from '@ngrx/store';
import { Student } from '../../../shared/models/student.model';

export const getStudents = createAction('[Student Action] Get Students');

export const getStudentsSuccess = createAction(
  '[Student Action] Get Students Success',
  props<{ students: Student[] }>()
);

export const getStudentsError = createAction(
  '[Student Action] Get Students Error',
  props<{ error: any }>()
);

export const addStudent = createAction(
  '[Student Action] Create Student',
  props<{ student: Student }>()
);

export const addStudentSuccess = createAction(
  '[Student Action] Add Student Success',
  props<{ student: Student }>()
);

export const addStudentError = createAction(
  '[Student Action] Add Student Error',
  props<{ error: any }>()
);

export const updateStudent = createAction(
  '[Student Action] Update Student',
  props<{ student: Student }>()
);

export const updateStudentSuccess = createAction(
  '[Student Action] Update Student Success',
  props<{ student: Student }>()
);

export const updateStudentError = createAction(
  '[Student Action] Update Student Error',
  props<{ error: any }>()
);

export const deleteStudent = createAction(
  '[Student Action] Delete Student',
  props<{ student: Student }>()
);

export const deleteStudentSuccess = createAction(
  '[Student Action] Delete Student Success',
  props<{ student: Student }>()
);

export const deleteStudentError = createAction(
  '[Student Action] Delete Student Error',
  props<{ error: any }>()
);
