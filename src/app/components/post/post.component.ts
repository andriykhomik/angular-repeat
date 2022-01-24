import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../models/Post";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()posts?: IPost[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
  }

}
