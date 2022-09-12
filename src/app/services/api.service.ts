import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjectDTO } from '../models/project-model';
import { ProjectDetailDTO } from '../models/projectDetail-model';
import { TaskDTO } from '../models/task-model';
import { UserDTO } from '../models/user-model';

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

  getTasks(projectId: number): Observable<TaskDTO[]> {
    console.log(projectId)
    return this.http.get<TaskDTO[]>(`${environment.BASE_URL}/${projectId}/tasks`, {
    });
  }

  getTaskDetail(id: number): Observable<TaskDTO> {
    return this.http.get<TaskDTO>(`${environment.BASE_URL}/tasks/${id}`);
  }

  getUsers(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(`${environment.BASE_URL}/users`, {
    });
  }

  getUserDetail(id: number): Observable<UserDTO> {
    return this.http.get<UserDTO>(`${environment.BASE_URL}/users/${id}`);
  }

  getPublicContent(): Observable<any> {
    return this.http.get(environment.BASE_URL + 'all', { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(environment.BASE_URL + 'user', { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(environment.BASE_URL + 'mod', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(environment.BASE_URL + 'admin', { responseType: 'text' });
  }
}
