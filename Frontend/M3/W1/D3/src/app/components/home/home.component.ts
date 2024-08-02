import { Component, OnInit } from '@angular/core';
import { iJsonContent } from '../../models/i-json-content';
import { iPost } from '../../models/ipost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  postArr: iPost[] = [];
  randomPost!: iPost;
  random4Posts: iPost[] = [];

  ngOnInit() {
    // Primo post random
    fetch('../../../assets/db.json')
      .then((response) => response.json())
      .then((data: iJsonContent) => {
        const posts = data.posts;
        this.randomPost = posts[Math.floor(Math.random() * posts.length)];
        // Rimuove il post casuale dall'array di tutti i post
        this.postArr = posts.filter((post) => post.id !== this.randomPost.id);

        // Mescola l'array rimanente e prende i primi 4 post
        this.random4Posts = this.shuffleArray(this.postArr).slice(0, 4);
      });

    // Tutti i post
    fetch('../../../assets/db.json')
      .then((response) => response.json())
      .then((post: iJsonContent) => {
        this.postArr = post.posts.filter(
          (post) => post.id !== this.randomPost.id
        );
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }

  shuffleArray(array: iPost[]): iPost[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
