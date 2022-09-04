import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjectDTO } from '../models/project-model';
import { ProjectDetailDTO } from '../models/projectDetail-model';
import { TaskDTO } from '../models/task-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<ProjectDTO[]> {
    return this.http.get<ProjectDTO[]>(`${environment.BASE_URL}/projects`, {
    });
  }

  getProjectDetail(id: number): Observable<ProjectDetailDTO> {
    return this.http.get<ProjectDetailDTO>(`${environment.BASE_URL}/projects/${id}`);
  }

  getTasks(): Observable<TaskDTO[]> {
    return this.http.get<TaskDTO[]>(`${environment.BASE_URL}/tasks`, {
    });
  }

  getTaskDetail(id: number): Observable<TaskDTO> {
    return this.http.get<TaskDTO>(`${environment.BASE_URL}/tasks/${id}`);
  }
}
