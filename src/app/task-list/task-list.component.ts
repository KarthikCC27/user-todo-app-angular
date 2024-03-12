import { Component, Input } from '@angular/core';
import { Users } from '../users';
import { UserService } from '../users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  constructor(public uService: UserService) {}
  users: Users[] = this.uService.getDetails();

  isUpdate: Boolean = true;
  working_index: number = -1;
  newtask: string = '';
  current_user: number = 0;

  selectedOption(event: any) {
    this.current_user = event.target.value;
  }

  Addtask(task: string) {
    if (this.newtask != '') {
      this.users[this.current_user].task.push(task);
      this.newtask = '';
    }
  }
  deleteTask(index: number) {
    this.users[this.current_user].task.splice(index, 1);
  }

  updateTask(index: number) {
    this.newtask = this.users[this.current_user].task[index];
    this.working_index = index;
    this.isUpdate = false;
  }
  editTask(task: string) {
    if (this.working_index != -1) {
      this.users[this.current_user].task[this.working_index] = this.newtask;
      this.working_index = -1;
      this.isUpdate = true;
      this.newtask = '';
    }
  }
}
