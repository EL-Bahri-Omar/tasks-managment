import { Component, signal } from '@angular/core';
import { TasksList } from "./tasks-list/tasks-list";

@Component({
  selector: 'app-root',
  imports: [TasksList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-angular');
}
