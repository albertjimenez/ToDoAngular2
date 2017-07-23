import {Injectable} from '@angular/core';

const todos = [
];

@Injectable()
export class TodoService {

  constructor() {
  }

  get() {
    return new Promise(resolve => resolve(todos));
  }

  add(data) {
      return new Promise(resolve => {
        todos.push(data);
        resolve(data);
      });
    }

}
