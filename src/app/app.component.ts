import { Component } from '@angular/core';
import { TodoModel } from './models/todo-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'app';

  newTodoText: string;
  todoList: TodoModel[] = [];

  constructor() {}

  addTodo() {
    if (this.newTodoText) {
      this.todoList.push({
        text: this.newTodoText,
        isChecked: false
      });
      this.newTodoText = '';
    } else {
      alert('Aucun texte saisi !');
    }
    console.log('todoList', this.todoList);
  }

  // <app-todo *ngFor="let todo of todoList" [todo]="todo" (deleteTriggered)="deleteTodo($event)"></app-todo>
  // cette methode est appelee a chaque fois que l'EventEmitter deleteTriggered est emit
  deleteTodo(todo: TodoModel) {
    console.log('suppression todo dans parent', todo);
    const index = this.todoList.findIndex(t => {
      return t === todo;
    });

    if (index !== -1) {
      this.todoList.splice(index, 1);
    } else {
      alert('todo not found');
    }
  }
}
