import { Todo } from './../../dtos/todo.dto';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() toggleCompletedEvent: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  transformDate(date: Date): string {
    return new Date(date).toDateString();
  }
  isDateNear(date: Date): boolean {
    const today = new Date();
    const tomorrow = today.getDate() + 1;
    return new Date(date).getDate() === tomorrow;
  }

  toggleCompleted(todo: Todo) {
    this.toggleCompletedEvent.emit(todo);
  }
}
