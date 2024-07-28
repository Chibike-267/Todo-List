import { createAction, props } from '@ngrx/store';
import { TodoItem } from '../model/todo.model';

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ todo: TodoItem }>()
);
export const removeTodo = createAction(
  '[Todo] Remove Todo',
  props<{ id: number }>()
);
