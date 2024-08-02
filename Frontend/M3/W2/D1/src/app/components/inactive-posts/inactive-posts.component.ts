import { Component } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { Post } from 'src/app/models/post.interface';

@Component({
    selector: 'app-inactive-posts',
    templateUrl: './inactive-posts.component.html',
    styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent {
    posts: Post[] = [];

    constructor(private blogSvc: BlogService) {}

    ngOnInit(): void {
        //  this.getInactivePosts().then((res) => {
        //      this.posts = res;
        //  });
        this.posts = this.blogSvc.getInactivePosts();
    }

    //  async getInactivePosts() {
    //      const response = await fetch('../../assets/db.json');
    //      const postsResponse = (await response.json()) as Array<Post>;
    //      return postsResponse.filter((post) => !post.active);
    //  }
}
