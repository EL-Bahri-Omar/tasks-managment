import { Component } from '@angular/core';
import { TaskService } from '../services/task';
import { Task } from '../model/task';

@Component({
  selector: 'app-tasks-add',
  imports: [],
  templateUrl: './tasks-add.html',
  styleUrl: './tasks-add.css'
})
export class TasksAdd {
  constructor(private taskService : TaskService){}

  addTask(taskName : string){
    const newTask = new Task(
      this.taskService.getNewId(),
      taskName,
      "pending"
    );
    this.taskService.addTask(newTask);
  }

}
