import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TaskService } from '../services/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  templateUrl: './task-edit.html',
  imports: [FormsModule],
  styleUrl: './task-edit.css'
})
export class EditTask implements OnInit {
  @Input() task!: Task;
  @Output() hideEdit = new EventEmitter<void>();

  taskName = '';
  taskStatus = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskName = this.task.taskName;
    this.taskStatus = this.task.taskStatus;
  }

  editTask() {
    const updatedTask = new Task(this.task.id, this.taskName, this.taskStatus);
    this.taskService.editTask(updatedTask);
    this.hideEdit.emit();
  }

  cancel() {
    this.hideEdit.emit();
  }
}
