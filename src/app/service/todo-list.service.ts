import { HttpRequestState, FetchTodoResponse } from './../interface/todos';
import { Todo } from './todo-list-fake.service';
import { Observable, of, throwError, startWith } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { withRequestState } from './withRequestState';

@Injectable({
  providedIn: 'root'
})

export class TodoListService {
  isLoading = false;  
  task: Todo[] = [];

  url = `http://localhost:3000/todos`;
  http = inject(HttpClient);
  
  // constructor(private http: HttpClient) { }

  getAllTodos(): Observable<HttpRequestState<FetchTodoResponse<Todo[]>>> {
    return withRequestState(this.http.get<FetchTodoResponse<Todo[]>>(`${this.url}`))
  }

  addTodo(todo: string): Observable<HttpRequestState<FetchTodoResponse<Todo>>> {
    const task = { name: todo, done: false };
    return withRequestState(this.http.post<FetchTodoResponse<Todo>>(`${this.url}`, task))
  }

  deleteTask(id: number): Observable<HttpRequestState<FetchTodoResponse<Todo>>> {
    return withRequestState(this.http.delete<FetchTodoResponse<Todo>>(`${this.url}/${id}`))
  }
}
