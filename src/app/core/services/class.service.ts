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

  createClass(classs: Class): Observable<ClassResponse> {
    return this.http.post<ClassResponse>(
      `https://localhost:7175/api/Class`,
      classs
    );
  }

  updateClass(classCode: string, classs: Class): Observable<ClassResponse> {
    return this.http.put<ClassResponse>(
      `https://localhost:7175/api/Class/${classCode}`,
      classs
    );
  }

  deleteClass(classCode: string): Observable<ClassResponse> {
    return this.http.delete<ClassResponse>(
      `https://localhost:7175/api/Class/${classCode}`,
      {}
    );
  }

  addStudentToClass(
    classCode: string,
    studentId: string
  ): Observable<ClassResponse> {
    return this.http.post<ClassResponse>(
      `https://localhost:7175/api/Class/${classCode}/AddStudent/${studentId}`,
      {}
    );
  }

  removeStudentFromClass(
    classCode: string,
    studentId: string
  ): Observable<ClassResponse> {
    return this.http.post<ClassResponse>(
      `https://localhost:7175/api/Class/${classCode}/RemoveStudent/${studentId}`,
      {}
    );
  }
}
