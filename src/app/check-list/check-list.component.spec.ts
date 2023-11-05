import { TodoListService } from './../service/todo-list.service';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CheckListComponent } from './check-list.component';
import { TodoListFakeService } from '../service/todo-list-fake.service';

describe('CheckListComponent', () => {
  let component: CheckListComponent;
  let fixture: ComponentFixture<CheckListComponent>;
  // 1
  let todoListFakeService = new TodoListFakeService() 
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CheckListComponent],
      providers: [
        // 2
        {
          provide: TodoListService,
          useValue: todoListFakeService
        },
      ]
    })

    fixture = TestBed.createComponent(CheckListComponent);
    component = fixture.componentInstance;
    component.todoListService.task = [
      { id: 1, name: 'task 1', done: false },
      { id: 2, name: 'task 2', done: false },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); 
  }); 

  it('should render title', () => { 
    const fixture = TestBed.createComponent(CheckListComponent);
    // auto completion :
    const compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    //auto completion example: textContent
    expect(compiled.querySelector('h1')?.textContent).toContain('Check-list');
  });

  it('should have no tasks', fakeAsync(() => {
    component.todoListService.task = [];
    const fixture = TestBed.createComponent(CheckListComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    tick();
    expect(compiled.querySelector('#no-task-div')?.textContent).toContain('pas de tâches');
  }));

  it('should have 2 tasks', fakeAsync(() => {
    const fixture = TestBed.createComponent(CheckListComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    tick();
    fixture.detectChanges();
    expect(compiled.querySelector('#no-task-div')?.textContent).not.toContain('pas de tâches');
    expect(compiled.querySelectorAll('#checkboxTasks').length).toEqual(2);
  }))

  it('should add a new task', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    //auto completion example: querySelector
    const input = compiled.querySelector('#inputTask') as HTMLInputElement;
    input.value = 'task 3';
    // not sure any more if this is necessary
    input.dispatchEvent(new Event('input'));
    const button = compiled.querySelector('#buttonAddTask') as HTMLButtonElement;
    fixture.detectChanges();
    expect(compiled.querySelectorAll('#checkboxTasks').length).toEqual(3);
  });

  it('should delete a task', () => {
   
    const compiled = fixture.nativeElement as HTMLElement;
    // generate an error some times !!! 
    // const button = compiled.querySelector('#buttonDeleteTask') as HTMLButtonElement;
    // button.click();  
    component.deleteTask(1);
    fixture.detectChanges();
    expect(compiled.querySelectorAll('#checkboxTasks').length).toEqual(1);
  })
});  