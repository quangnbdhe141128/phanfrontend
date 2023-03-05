import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service'
import { User } from '../dto/user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  // @ts-ignore
  get users(): User[] | undefined {
    return this._users;
  }

  set users(value: User[]) {
    this._users = value;
  }

  private _users: User[] | undefined;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      console.log(data);
      this._users = data;
    });
  }
}
