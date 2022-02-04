import { TodoService } from './../../services/todo.service';
import { Todo } from './../../dtos/todo.dto';
import { Project } from './../../dtos/project.dto';
import { Subscription } from 'rxjs';
import { UiHandleService } from '../../services/ui-handle.service';
import { Component, OnInit } from '@angular/core';
import { faTimesCircle, faPlusSquare } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  subscription: Subscription;
  project!: Project;
  isProjectDetailActive!: boolean;
  faTimes = faTimesCircle;
  faPlus = faPlusSquare;
  constructor(
    private readonly uiHandleService: UiHandleService,
    private readonly todoService: TodoService,
  ) {
    this.subscription = this.uiHandleService.onToggleProjectDetail().subscribe(
      (res) => {
        this.isProjectDetailActive = res.isProjectDetailActive;
        this.project = res.project;
      }
    ) 
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  closeProject() {
    this.uiHandleService.toggleProjectDetail();
  }

  toggleCompletedTodo(todo: Todo) {
    todo.completed = !todo.completed;
    console.log({ value: todo.completed });
    this.todoService.updateTodo(todo).subscribe(res => {
      if (this.project && this.project.Todos) {
        for(let i = 0; i < this.project.Todos.length; i+=1) {
          if(this.project.Todos[i].id === res.data.id) {
            this.project.Todos[i] = res.data;
          }
        }
      }
    });
  }
}
