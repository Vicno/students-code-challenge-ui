import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentResponse } from '../../shared/models/response.model';
import { Student } from '../../shared/models/student.model';

@Injectable({ providedIn: 'root' })
export class StudentService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(`https://localhost:7175/api/Student`);
  }

  createStudent(student: Student): Observable<StudentResponse> {
    return this.http.post<StudentResponse>(
      `https://localhost:7175/api/Student`,
      student
    );
  }

  updateStudent(
    studentId: string,
    student: Student
  ): Observable<StudentResponse> {
    return this.http.put<StudentResponse>(
      `https://localhost:7175/api/Student/${studentId}`,
      student
    );
  }

  deleteStudent(studentId: string): Observable<StudentResponse> {
    return this.http.delete<StudentResponse>(
      `https://localhost:7175/api/Students/${studentId}`,
      {}
    );
  }
}
