import { UiHandleService } from './../../services/ui-handle.service';
import { Project } from './../../dtos/project.dto';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faPlusSquare, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  name!: string;
  faPlus = faPlusSquare;
  faTimes = faTimesCircle;
  @Output() sendNewProject: EventEmitter<Project> = new EventEmitter();
  @Output() sendUpdateProject: EventEmitter<Project> = new EventEmitter();
  isProjectFormActive!: boolean;
  subscription: Subscription;
  project?: Project;

  constructor(private readonly uiHandleService: UiHandleService) {
    this.subscription = this.uiHandleService.onToggle()
      .subscribe((res) => {
        this.project = res.project
        this.name = !!res.project ? res.project.name : '';
        this.isProjectFormActive = res.isProjectFormActive
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addProject() {
    if (!this.name) {
      alert('Please add project name');
      return;
    }
    const newProject: Project = !!this.project ? {
      id: this.project.id,
      createdAt: this.project.createdAt,
      name: this.name
    } : {
      name: this.name,
    };
    !!this.project ? this.sendUpdateProject.emit(newProject) : this.sendNewProject.emit(newProject);
    this.name = '';
  }

}
