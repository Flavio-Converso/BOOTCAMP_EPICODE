import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { TodosService } from './todos.service';
import { iTodos } from './modules/todos';
import { iUsers } from './modules/users';

@Injectable({
  providedIn: 'root',
})
export class ArrayMergeService {
  constructor(
    private todosService: TodosService,
    private usersService: UsersService
  ) {}

  getTodosWithUsers(): iTodos[] {
    return this.todosService.todos.map((todo) => {
      const user = this.usersService.users.find(
        (user) => user.id == todo.userId
      );
      return { ...todo, user };
    });
  }

  getTodosByUsers(): iUsers[] {
    return this.usersService.users.map((user) => {
      const todos = this.todosService.todos.filter(
        (todo) => todo.userId === user.id
      );
      return { ...user, todos };
    });
  }

  searchValue(valueToSearch: string): iTodos[] {
    const todosWithUsers = this.getTodosWithUsers();
    const lowerCaseSearchValue = valueToSearch.toLowerCase();
    return todosWithUsers.filter(
      (item) =>
        item.user?.lastName.toLowerCase().includes(lowerCaseSearchValue) ||
        item.user?.firstName.toLowerCase().includes(lowerCaseSearchValue) ||
        item.user?.title.toLowerCase().includes(lowerCaseSearchValue) ||
        item.todo.toLowerCase().includes(lowerCaseSearchValue)
    );
  }

  searchUsers(valueToSearch: string): iUsers[] {
    const lowerCaseSearchValue = valueToSearch.toLowerCase();
    return this.usersService.users.filter(
      (user) =>
        user.lastName.toLowerCase().includes(lowerCaseSearchValue) ||
        user.firstName.toLowerCase().includes(lowerCaseSearchValue)
    );
  }
}
