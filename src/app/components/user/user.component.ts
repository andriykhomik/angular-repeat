import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models/User";
import {PostService} from "../../services/post.service";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()users?: IUser[];

  constructor(private postService: PostService, private commentService: CommentService) { }

  ngOnInit(): void {
  }

  showDetails(id: number) {
    this.postService.getPostById(id).subscribe(posts => {
      console.log(posts);
      for (const post of posts){
        this.commentService.getCommentsById(post.id).subscribe(comments => {
          console.log(comments);
        })
      }
    });
  }
}
