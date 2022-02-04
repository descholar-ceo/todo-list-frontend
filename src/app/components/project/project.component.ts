import { Project } from '../../dtos/project.dto';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faTrashAlt, faEdit, faFolderOpen } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project!: Project;
  @Output() onDeleteProject: EventEmitter<Project> = new EventEmitter();
  @Output() onUpdateProject: EventEmitter<Project> = new EventEmitter();
  @Output() onOpenProject: EventEmitter<Project> = new EventEmitter();
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  faFolderOpen = faFolderOpen;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(project: Project) {
    this.onDeleteProject.emit(project);
  }

  onUpdate(project: Project) {
    this.onUpdateProject.emit(project);
  }

  onOpenProjectDetails(project: Project) {
    this.onOpenProject.emit(project);
  }
}
