import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducer } from './reducer/todo.reducer';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideStore({ todos: todoReducer }),
    provideStoreDevtools()
  ]
};
