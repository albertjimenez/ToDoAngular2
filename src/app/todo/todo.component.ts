import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from './todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]

})
export class TodoComponent implements OnInit {

  private todos;
  private activeTasks;
  private newTodo;

  getTodos() {
    return this.todoService.get().then(todos => {
      this.todos = todos;
      this.activeTasks = this.todos.filter(todo => todo.isDone).length;
    });
  }

  addTodo() {
    this.todoService.add({title: this.newTodo, isDone: false}).then(() => {
      return this.getTodos();
    }).then(() => {
      this.newTodo = ''; // clear input form value
    });
  }

  constructor(private todoService: TodoService) {
  }


  ngOnInit() {
    this.getTodos();
  }

}
