import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../model/task';
import { TaskService } from '../services/task';

@Component({
  selector: 'app-delete-task',
  templateUrl: './task-delete.html',
  styleUrl: './task-delete.css'
})
export class DeleteTask {
  @Input() task!: Task;
  @Output() hideDelete = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  deleteTask() {
    this.taskService.deleteTask(this.task.id);
    this.hideDelete.emit();
  }

  cancel() {
    this.hideDelete.emit();
  }
}
