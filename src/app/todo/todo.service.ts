import {Injectable} from '@angular/core';

let todos = [
  {_id: 1, title: 'Upload to Github Pages', isDone: false},
  {_id: 2, title: 'Testing Angular 2', isDone: true},
];

@Injectable()
export class TodoService {

  constructor() {
  }

  get(query = '') {
    return new Promise(resolve => {
      let data;
      if (query === 'completed' || query === 'active') {
        const isCompleted = query === 'completed';
        data = todos.filter(todo => todo.isDone === isCompleted);
      } else {
        data = todos;
      }
      resolve(data);
    });

  }

  add(data) {
    return new Promise(resolve => {
      todos.push(data);
      resolve(data);
    });
  }

  put(data) {
    return new Promise(resolve => {
      let index = todos.findIndex(todo => todo._id === data._id);
      todos[index].title = data.title;
      resolve(data);
    });
  }

  delete(id) {
    return new Promise(resolve => {
      let index = todos.findIndex(todo => todo._id === id);
      todos.splice(index, 1);
      resolve(true);
    });
  }

  deleteCompleted() {
    return new Promise(resolve => {
      todos = todos.filter(todo => !todo.isDone);
      resolve(todos);
    });
  }


}
