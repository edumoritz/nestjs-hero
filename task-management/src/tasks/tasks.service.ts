import { Task, TasksStatus } from './task.model';
import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }

  createTask(title: string, description: string): Task {
    const task: Task = {
      id: v4(),
      title,
      description,
      status: TasksStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }
}
