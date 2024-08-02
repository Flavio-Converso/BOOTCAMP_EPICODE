import { Component, QueryList, ViewChildren } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { SinglePostComponent } from '../single-post/single-post.component';
import { BlogService } from '../blog.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  constructor(private blogSvc: BlogService) {}

  post!: PostInterface;
  related: PostInterface[] = [];
  posts = this.blogSvc.posts;
  uniqueTags: string[] = [];
  filteredPosts: PostInterface[] = [];
  selectedTag!: string;

  @ViewChildren(SinglePostComponent)
  singlePosts!: QueryList<SinglePostComponent>;

  ngOnInit(): void {
    this.post = this.blogSvc.topPost;
    this.related = this.blogSvc.getRandomPosts(4);
    this.uniqueTags = this.blogSvc.getUniqueTags();
    this.filteredPosts = this.posts;
  }

  editPost(i: number) {
    this.singlePosts.toArray()[i].toggleEdit();
  }

  filterPostsByTag(tag: string): void {
    this.selectedTag = tag;
    this.filteredPosts = this.blogSvc.filterPostsByTag(tag);
  }
}
