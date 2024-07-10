import { createReducer, on } from '@ngrx/store';
import { Student } from '../../../shared/models/student.model';
import * as StudentActions from '../actions/student.action';

export interface StudentState {
  isLoading: boolean;
  students: Student[];
  error: string | null;
}

export const initialStudentState: StudentState = {
  isLoading: false,
  students: [],
  error: null,
};

export const studentReducer = createReducer(
  initialStudentState,
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
  on(StudentActions.addStudent, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(StudentActions.addStudentSuccess, (state, action) => ({
    ...state,
    students: [action.student, ...state.students],
    isLoading: false,
  })),
  on(StudentActions.addStudentError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),
  on(StudentActions.updateStudent, (state) => ({ ...state, isLoading: true })),
  on(StudentActions.updateStudentSuccess, (state, action) => ({
    ...state,
    students: state.students.map((student) =>
      student.id === action.student.id ? action.student : student
    ),
    isLoading: false,
  })),
  on(StudentActions.updateStudentError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),
  on(StudentActions.deleteStudent, (state) => ({ ...state, isLoading: true })),
  on(StudentActions.deleteStudentSuccess, (state, action) => ({
    ...state,
    students: state.students.filter(
      (student) => student.id !== action.student.id
    ),
    isLoading: false,
  })),
  on(StudentActions.deleteStudentError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  }))
);

export const getAllStudents = (state: StudentState) => state.students;
