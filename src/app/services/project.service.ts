import { ModificationSuccess, Project } from './../dtos/project.dto';
import { ProjectListResponse } from '../dtos/project.dto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private readonly httpClient: HttpClient) { }

  getProjects(): Observable<ProjectListResponse> {
    return this.httpClient.get<ProjectListResponse>(`${environment.apiUri}/projects`);
  }

  addProject(project: Project): Observable<ModificationSuccess> {
    const url = `${environment.apiUri}/projects`
    return this.httpClient.post<ModificationSuccess>(url, project, httpOptions);
  }

  updateProject(project: Project): Observable<ModificationSuccess> {
    const url = `${environment.apiUri}/projects/${project.id}`
    return this.httpClient.patch<ModificationSuccess>(url, project, httpOptions);
  }

  deleteProject(project: Project): Observable<ModificationSuccess> {
    return this.httpClient.delete<ModificationSuccess>(`${environment.apiUri}/projects/${project.id}`);
  }
}
