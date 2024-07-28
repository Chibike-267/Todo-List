import { createReducer, on } from '@ngrx/store';
import { TodoItem } from '../model/todo.model';
import * as TodoActions from '../action/todo.action';

export interface TodoState {
  todos: TodoItem[];
}

export const initialState: TodoState = {
  todos: []
};

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.addTodo, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo]
  })),
  on(TodoActions.removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
  }))
);