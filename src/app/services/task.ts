import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks : Task[] = [
    new Task(1, 'Rappel Js',  'pending'),
    new Task(2, 'Exercice Crud',  'pending'),
    new Task(3, 'Rappel des fonctions de tableaux',  'pending')
  ];
  tasksUpdated = new Subject<Task[]>

  getTasks() : Task[]{
    return [...this.tasks];
  }

  getTaskById(id : number) : Task|undefined{
    return this.tasks.find(t=>t.id === id)
  }

  getNewId() : number{
    return this.tasks[this.tasks.length - 1] . id + 1
  }

  addTask(task : Task) : void{
    this.tasks = [...this.tasks, task];
    this.tasksUpdated.next([...this.tasks]);
  }

  editTask(task : Task) : void{
    this.tasks = this.tasks.map(
      (t:Task) => (task.id === t.id)?task:t
    );
    this.tasksUpdated.next([...this.tasks]);
  }

  deleteTask(id : number) : void{
    this.tasks = this.tasks.filter(
      (t:Task) => t.id !== id
    );
    this.tasksUpdated.next([...this.tasks]);
  }
}
