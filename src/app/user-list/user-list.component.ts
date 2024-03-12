import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Users } from '../users';
import { UserService } from '../users.service';
import {ButtonModule} from 'primeng/button';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [FormsModule,ButtonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {

  users: Users[];

  constructor(public uService: UserService) {
    this.users = this.uService.getDetails();
  }
 

  onSubmit(userdetails: NgForm) {
    this.uService.setDetails(userdetails.value.uname,userdetails.value.email,[])
    userdetails.reset();
  }

}
