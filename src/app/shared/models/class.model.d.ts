import { Student } from './student.model';

export type Class = {
  classCode: string;
  title: string;
  description: string;
  students: Student[];
};
