import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { ModificationSuccess } from './../dtos/project.dto';
import { Todo } from './../dtos/todo.dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private readonly httpClient: HttpClient) { }

  updateTodo(todo: Todo): Observable<ModificationSuccess> {
    const url = `${environment.apiUri}/todos/${todo.id}`
    return this.httpClient.patch<ModificationSuccess>(url, todo, httpOptions);
  }

  deleteProject(todo: Todo): Observable<ModificationSuccess> {
    return this.httpClient.delete<ModificationSuccess>(`${environment.apiUri}/todos/${todo.id}`);
  }
}
