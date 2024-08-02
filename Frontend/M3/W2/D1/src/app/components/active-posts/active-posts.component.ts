import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { BlogService } from 'src/app/blog.service';

@Component({
    selector: 'app-active-posts',
    templateUrl: './active-posts.component.html',
    styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {
    posts: Post[] = [];
    constructor(private blogSvc: BlogService) {}
    ngOnInit(): void {
        //  this.getActivePosts().then((res) => {
        //      this.posts = res;
        //  });
        this.posts = this.blogSvc.getActivePosts();
    }

    // async getActivePosts() {
    //     const response = await fetch('../../assets/db.json');
    //     const postsResponse = (await response.json()) as Array<Post>;
    //     return postsResponse.filter((post) => post.active);
    //  }
}
