import { createReducer, on } from '@ngrx/store';
import { Student } from '../../../shared/models/student.model';
import * as StudentActions from '../actions/student.action';
export interface StudentState {
  isLoading: boolean;
  students: Student[];
}

export const initialState: StudentState = {
  isLoading: false,
  students: [],
};

export const studentReducer = createReducer(
  initialState,
  on(StudentActions.getStudents, (state) => ({ ...state, isLoading: true })),
  on(StudentActions.getStudentsSuccess, (state, action) => ({
    ...state,
    students: action.students,
    isLoading: false,
  })),
  on(StudentActions.getStudentsError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),
  on(StudentActions.updateStudent, (state) => ({ ...state, isLoading: true })),
  on(StudentActions.updateStudentSuccess, (state, action) => ({
    ...state,
    students: [action.student, ...state.students],
    isLoading: false,
  })),
  on(StudentActions.updateStudentError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),
  on(StudentActions.deleteStudent, (state) => ({ ...state, isLoading: true })),
  on(StudentActions.deleteStudentSuccess, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(StudentActions.deleteStudentError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  }))
);

export const getAllStudents = (state: StudentState) => state.students;
