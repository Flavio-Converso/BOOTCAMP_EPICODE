import { Component, OnInit } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {
  active!: PostInterface[];

  constructor(private blogSvc: BlogService) {}

  ngOnInit(): void {
    this.active = this.blogSvc.activePosts;
  }
}
