import { Student } from './student.model';
import { Class } from './class.model';

type StudentResponse = {
  status: string;
  data: Student[];
};

type ClassResponse = {
  status: string;
  data: Class[];
};
