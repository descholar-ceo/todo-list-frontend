import { UiHandleService } from './../../services/ui-handle.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from '../../dtos/project.dto';
import { ProjectService } from '../../services/project.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = []
  @Output() updateProjectEvent: EventEmitter<Project> = new EventEmitter();
  constructor(
    private readonly projectService: ProjectService,
    private readonly uiHandleService: UiHandleService,
  ) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects): void => {
      this.projects = projects.data;
    });
  }

  deleteProject(project: Project) {
    this.projectService.deleteProject(project).subscribe(() => this.projects = this.projects.filter(
      (proj) => proj.id !== project.id));
  }

  saveNewProject(project: Project) {
    this.projectService.addProject(project).subscribe((savedProject) => this.projects.push(savedProject.data))
  }

  saveUpdateProject(project: Project) {
    this.projectService.updateProject(project).subscribe((res) => {
      for(let i = 0; i < this.projects.length; i+=1) {
        if(this.projects[i].id === res.data.id) {
          this.projects[i] = res.data;
        }
      }
    });
    this.uiHandleService.toggleProjectForm();
  }

  updateProject(project: Project) {
    this.uiHandleService.toggleProjectForm(project);
  }

  openProject(project: Project) {
    this.uiHandleService.toggleProjectDetail(project);
  }

}
