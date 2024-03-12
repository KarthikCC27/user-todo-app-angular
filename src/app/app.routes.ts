import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:"userlist",component:UserListComponent},
    {path:"tasklist",component:TaskListComponent}
];
