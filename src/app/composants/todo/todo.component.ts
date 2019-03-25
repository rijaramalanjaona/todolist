import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoModel } from '../../models/todo-model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  // @Input : pour que le todo soit parametrable dans le composant parent AppComponent
  // app.component.html : <app-todo *ngFor="let todo of todoList" [todo]="todo" (deleteTriggered)="deleteTodo($event)"></app-todo>
  @Input()
  todo: TodoModel;

  // @Output : notifier le composant parent d'un changement au niveau du composant enfant
  // le bouton 'supprimer' se trouve dans TodoComponent et la liste des todos dans AppComponent
  // => combiner EventEmitter et @Output
  @Output()
  deleteTriggered: EventEmitter<TodoModel> = new EventEmitter<TodoModel>();

  constructor() { }

  ngOnInit() {
  }

  deleteTodo() {
    console.log('deleteTriggered emit pour le todo', this.todo);
    this.deleteTriggered.emit(this.todo);
  }

}
