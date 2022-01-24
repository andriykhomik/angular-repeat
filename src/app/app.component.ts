import { Component } from '@angular/core';
import {IUser} from "./models/User";
import {UserService} from "./services/user.service";
import {IPost} from "./models/Post";
import {PostService} from "./services/post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  users?: IUser[];
  posts?: IPost[];
  userPosts?: IPost[];

  constructor(private userService: UserService, private postService: PostService) {
    this.userService.getAllUsers().subscribe(value => this.users = value);
    // this.postService.getAllPosts().subscribe(value => this.posts = value);

  }

}

