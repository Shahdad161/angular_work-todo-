import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todo = '';

  todos = [];

  constructor() {}

  ngOnInit() {}

  addTodo() {
    const newTodo = { todo: this.todo, status: 'active' };
    this.todos.push(newTodo);
    this.todo = '';
  }

  markAsComplete(todo) {
    todo.status = 'completed';
  }

  undo(todo) {
    todo.status = 'active';
  }
}
