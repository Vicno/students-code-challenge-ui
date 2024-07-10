import { createReducer, on } from '@ngrx/store';
import * as ClassActions from '../actions/class.action';
import { Class } from '../../../shared/models/class.model';
export interface ClassState {
  isLoading: boolean;
  classes: Class[];
  error: string | null;
}

export const initialClassState: ClassState = {
  isLoading: false,
  classes: [],
  error: null,
};

export const classReducer = createReducer(
  initialClassState,
  on(ClassActions.getClasses, (state) => ({ ...state, isLoading: true })),
  on(ClassActions.getClassesSuccess, (state, action) => ({
    ...state,
    classes: action.classes,
    isLoading: false,
  })),
  on(ClassActions.getClassesError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),
  on(ClassActions.addClass, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(ClassActions.addClassesSuccess, (state, action) => ({
    ...state,
    classes: [action.class, ...state.classes],
    isLoading: false,
  })),
  on(ClassActions.addClassesError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),
  on(ClassActions.updateClass, (state) => ({ ...state, isLoading: true })),
  on(ClassActions.updateClassSuccess, (state, action) => ({
    ...state,
    classes: state.classes.map((classs) =>
      classs.classCode === action.class.classCode ? action.class : classs
    ),
    isLoading: false,
  })),
  on(ClassActions.updateClassError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),
  on(ClassActions.deleteClass, (state) => ({ ...state, isLoading: true })),
  on(ClassActions.deleteClassSuccess, (state, action) => ({
    ...state,
    classes: state.classes.filter(
      (classs) => classs.classCode !== action.class.classCode
    ),
    isLoading: false,
  })),
  on(ClassActions.deleteClassError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),
  on(ClassActions.addStudentToClass, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(ClassActions.addStudentToClassSuccess, (state, action) => ({
    ...state,
    classes: state.classes.map((classItem) =>
      classItem.classCode === action.class.classCode ? action.class : classItem
    ),
    isLoading: false,
  })),
  on(ClassActions.addStudentToClassError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  })),
  on(ClassActions.removeStudentFromClass, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(ClassActions.removeStudentFromClassSuccess, (state, action) => ({
    ...state,
    classes: state.classes.map((classItem) =>
      classItem.classCode === action.class.classCode ? action.class : classItem
    ),
    isLoading: false,
  })),
  on(ClassActions.removeStudentFromClassError, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  }))
);

export const getAllClasses = (state: ClassState) => state.classes;
