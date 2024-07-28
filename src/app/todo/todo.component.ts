import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TodoActions from '../action/todo.action';
import { TodoItem } from '../model/todo.model';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent {
  todos$: Observable<TodoItem[]>;
  newTodoName = '';

  constructor(private store: Store<{ todos: { todos: TodoItem[] } }>) {
    this.todos$ = store.select(state => state.todos.todos);
  }

  addTodo() {
    if (this.newTodoName.trim()) {
      const newTodo: TodoItem = {
        id: Date.now(),
        name: this.newTodoName.trim()
      };
      this.store.dispatch(TodoActions.addTodo({ todo: newTodo }));
      this.newTodoName = '';
    }
  }

  removeTodo(id: number) {
    this.store.dispatch(TodoActions.removeTodo({ id }));
  }
}
