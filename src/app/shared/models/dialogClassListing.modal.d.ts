import { Student } from './student.model';
import { Class } from './class.model';
export type DialogClassListingModal = {
  studentId: string;
  classes: Class[];
};
