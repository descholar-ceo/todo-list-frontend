import { UiHandleService } from './../../services/ui-handle.service';
import { Todo } from './../../dtos/todo.dto';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faPlusSquare, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
