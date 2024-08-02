import { Component } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent {
  inactive!: PostInterface[];

  constructor(private blogSvc: BlogService) {}

  ngOnInit(): void {
    this.inactive = this.blogSvc.inactivePosts;
  }
}
