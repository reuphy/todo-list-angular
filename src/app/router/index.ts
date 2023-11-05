import { CheckListComponent } from './../check-list/check-list.component';
import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    component: CheckListComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];