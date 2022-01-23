import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "./models/User";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  template: `<app-user [users]="users"></app-user>`,
  styleUrls: []
})
export class AppComponent {
  users?: IUser[];

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(value => this.users = value);
  }
}
