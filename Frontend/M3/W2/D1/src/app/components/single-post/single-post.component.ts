import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { BlogService } from 'src/app/blog.service';

@Component({
    selector: 'app-active-posts',
    templateUrl: './single-post.component.html',
    styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent {
    posts: Post[] = [];
    constructor(private blogSvc: BlogService) {}
    ngOnInit(): void {
        //  this.getActivePosts().then((res) => {
        //      this.posts = res;
        //  });
        this.posts = this.blogSvc.getAllPosts();
    }

    // async getActivePosts() {
    //     const response = await fetch('../../assets/db.json');
    //     const postsResponse = (await response.json()) as Array<Post>;
    //     return postsResponse.filter((post) => post.active);
    //  }
}
