import { Component, OnInit } from '@angular/core';
import { ITodos, IUsers } from '../types/types';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor() { }
  users:IUsers;
  todos:ITodos;
  readMore:boolean[]=[]
  userID: number = 0;
  ngOnInit() {

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => this.todos = json)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.users = json)
    setTimeout(() => {
      console.log(this.users, this.todos);

    }, 1000);

  }

}
