import { Task } from './task.model';

export class List {
  id: number;
  title: string;
  createdAt: Date;
  completedAt: Date;
  completed: boolean;
  tasks: Task[];

  constructor(title: string) {
    this.id = new Date().getTime();
    this.title = title;
    this.createdAt = new Date();
    this.completed = false;
    this.tasks = [];
  }
}
