import { iUsers } from '../../modules/users';
import { ArrayMergeService } from './../../array-merge.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  userToTodos: iUsers[] = [];
  valueToSearch!: string;
  constructor(private ArrayMergeService: ArrayMergeService) {}

  ngOnInit() {
    this.userToTodos = this.ArrayMergeService.getTodosByUsers();
    console.log(this.userToTodos);
  }

  searchUsers(valueToSearch: string) {
    this.userToTodos = this.ArrayMergeService.searchUsers(valueToSearch);
  }
}
