import { Component, OnInit } from '@angular/core';
import { IComments, IPosts } from '../types/types';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  posts: IPosts;
  comments: IComments;
  userId: Number = 0;
  constructor() { }

  ngOnInit() {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.posts = json)
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => this.comments = json)
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(json => this.users = json)
    setTimeout(() => {
      console.log(this.posts, this.comments);

    }, 1000);

  }

}
