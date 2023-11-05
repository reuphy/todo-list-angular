import { Component } from '@angular/core';
import { CheckListComponent } from './check-list/check-list.component';
// routing with standalone
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // routing with standalone
  standalone: true,
  imports: [
    CheckListComponent,
    //routing with standalone
    RouterOutlet
  ],
})
export class AppComponent {
  title = 'todo-list-';
}
