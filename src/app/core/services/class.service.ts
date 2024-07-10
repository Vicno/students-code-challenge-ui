import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassResponse } from '../../shared/models/response.model';
import { Class } from '../../shared/models/class.model';

@Injectable({ providedIn: 'root' })
export class ClassService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Class[]> {
    return this.http.get<Class[]>(`https://localhost:7175/api/Class`);
  }

  createClass(classs: Class): Observable<Class> {
    return this.http.post<Class>(`https://localhost:7175/api/Class`, classs);
  }

  updateClass(classCode: string, classs: Class): Observable<Class> {
    return this.http.put<Class>(
      `https://localhost:7175/api/Class/${classCode}`,
      classs
    );
  }

  deleteClass(classCode: string): Observable<Class> {
    return this.http.delete<Class>(
      `https://localhost:7175/api/Class/${classCode}`,
      {}
    );
  }

  addStudentToClass(classCode: string, studentId: string): Observable<Class> {
    return this.http.post<Class>(
      `https://localhost:7175/api/Class/${classCode}/AddStudent/${studentId}`,
      {}
    );
  }

  removeStudentFromClass(
    classCode: string,
    studentId: string
  ): Observable<Class> {
    return this.http.post<Class>(
      `https://localhost:7175/api/Class/${classCode}/RemoveStudent/${studentId}`,
      {}
    );
  }
}
