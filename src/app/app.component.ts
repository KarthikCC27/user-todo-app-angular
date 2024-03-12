import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { RouterModule } from '@angular/router';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserListComponent,TaskListComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  src: string = "assets/user.png"
  title = 'user-todo-app';

  onclickuser(){
    this.src = "assets/user.png"
  }

  onclicktask(){
    this.src = "assets/task.png"
  }
}
