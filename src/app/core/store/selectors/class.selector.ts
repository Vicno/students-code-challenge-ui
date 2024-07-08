import { createSelector } from '@ngrx/store';
import { selectSharedAppState } from '../state/app.state';
import * as fromClass from '../reducers/class.reducer';
import { ClassState } from '../reducers/class.reducer';

export const selectClassState = createSelector(
  selectSharedAppState,
  (selectSharedAppState) => selectSharedAppState.classes
);

export const selectAllClasses = createSelector(
  selectClassState,
  fromClass.getAllClasses
);

export const getAllStudentsFromClass = (classCode: string) =>
  createSelector(selectClassState, (classesState: ClassState) => {
    if (classesState.classes) {
      const foundClass = classesState.classes.find(
        (c) => c.classCode === classCode
      );
      return foundClass ? foundClass.students : [];
    }
    return [];
  });

export const getClassesByStudentId = (studentId: string) =>
  createSelector(selectClassState, (classesState: ClassState) => {
    if (classesState.classes) {
      return classesState.classes.filter((classItem) =>
        classItem.students.some((student) => student.id === studentId)
      );
    }
    return [];
  });
