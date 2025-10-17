import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task';
import { Task } from '../model/task';
import { TasksAdd } from "../tasks-add/tasks-add";
import { EditTask } from "../task-edit/task-edit";
import { DeleteTask } from "../task-delete/task-delete";

@Component({
  selector: 'app-tasks-list',
  imports: [TasksAdd, EditTask, DeleteTask],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css'
})
export class TasksList implements OnInit {
  tasks: Task[] = [];
  action = "";
  taskToEdit?: Task;
  taskToDelete?: Task;

  constructor(private taskService: TaskService) { }

  setAction(action: string) {
    this.action = action;
  }

  showAddTask() {
    this.action = "add";
  }

  showEditTask(id: number) {
    this.taskToEdit = this.taskService.getTaskById(id);
    this.action = "edit";
  }

  hideEditTask() {
    this.action = "";
    this.taskToEdit = undefined;
  }

  showDeleteTask(id: number) {
    this.taskToDelete = this.taskService.getTaskById(id);
    this.action = "delete";
  }

  hideDeleteTask() {
    this.action = "";
    this.taskToDelete = undefined;
  }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.taskService.tasksUpdated.subscribe(
      tasks => this.tasks = tasks
    );
  }
}
