import { Project } from './../dtos/project.dto';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiHandleService {
  private isProjectFormActive: boolean = false;
  private isProjectDetailActive: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleProjectForm(project?: Project): void {
    this.isProjectFormActive = !this.isProjectFormActive;
    this.subject.next({ isProjectFormActive: this.isProjectFormActive, project });
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

  toggleProjectDetail(project?: Project): void {
    this.isProjectDetailActive = !this.isProjectDetailActive;
    this.subject.next({ isProjectDetailActive: this.isProjectDetailActive, project });
  }

  onToggleProjectDetail(): Observable<any> {
    return this.subject.asObservable();
  }
}
