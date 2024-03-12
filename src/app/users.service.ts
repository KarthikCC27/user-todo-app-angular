import { Injectable } from "@angular/core";
import { Users } from "./users";

@Injectable({providedIn: 'root'})
export class UserService {
    users: Users[] = [
        { uname: "user1", email: "user1@gmail.com", task: ['Go to gym', 'Drink coffee'] },
        { uname: "user2", email: "user2@gmail.com", task: ['Go for walk', 'Pay bills'] }
    ];
    public getDetails():Users[] {
        return this.users;
    }

    public setDetails(username: string, email: string, taskname: string[]){
        this.users.push({ uname: username, email: email, task: taskname });
    }
}