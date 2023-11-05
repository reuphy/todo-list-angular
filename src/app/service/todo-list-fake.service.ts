import { Observable, catchError, map, of, startWith, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { FetchTodoResponse, HttpRequestState } from '../interface/todos';
import { withRequestState } from './withRequestState';

export interface Todo {
  name: string;
  done: boolean;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class TodoListFakeService {
  task: Todo[] = ([
    { id: 1, name: 'task 1', done: false },
    { id: 2, name: 'task 2', done: false },
  ]);

  getAllTodos(): Observable<HttpRequestState<FetchTodoResponse<Todo[]>>> {
    const data = {
      "message": "tasklits => ",
      "taksList": this.task
    }
    return withRequestState(of(data));
  }

  addTodo(todo: string): Observable<HttpRequestState<FetchTodoResponse<Todo>>> {
    const newTodo = { id: this.task.length + 1, name: todo, done: false };

    const data = {
      "message": "new todo added ",
      "taksList": newTodo
    }

    this.task.push(newTodo);
    return withRequestState(of(data));
  }

  deleteTask(id: number): Observable<HttpRequestState<FetchTodoResponse<number>>> {
    const data = {
      "message": "todo deleted",
      "taksList": id
    }

    this.task = this.task.filter(t => t.id !== id);

    return withRequestState(of(data));

  }
}
