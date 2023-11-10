import { tap } from 'rxjs/operators';
import { BehaviorSubject, switchMap } from 'rxjs';
import { TodoListService } from './../service/todo-list.service';
import { Todo, TodoListFakeService } from './../service/todo-list-fake.service';
import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../test/test.component';
@Component({
  selector: 'app-check-list',
  standalone: true,
  imports: [CommonModule, TestComponent],
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent {
  //since angular 16 use inject and not constructor
  //  todoListService = inject(TodoListService);     
  todoListService = inject(TodoListFakeService);

  // 1) rxjs refresh data after post request
  refreshTodo$ = new BehaviorSubject<true>(true);

  //toSignal method
  todos$ = toSignal(
    // 2) rxjs refresh data after post request
    this.refreshTodo$
      .pipe(
        switchMap(() => this.todoListService.getAllTodos())
      ))

  addTask(task: string): void {
    if (!task.trim()) { return; }

    this.todoListService.addTodo(task)
      .pipe(
        // 2) rxjs refresh data after post request
        tap(() => this.refreshTodo$.next(true)))
      .subscribe()
  }

  deleteTask(id: number): void {
    this.todoListService.deleteTask(id)
        // 3) rxjs refresh data after post request or delete 
      .pipe(tap(() => this.refreshTodo$.next(true)))
      .subscribe();
  }
}


