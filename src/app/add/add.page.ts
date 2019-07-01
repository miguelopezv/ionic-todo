import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { List } from '../models/list.model';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss']
})
export class AddPage {
  list: List;
  itemName = '';
  constructor(private todoService: TodoService, private route: ActivatedRoute) {
    const id: number = +this.route.snapshot.paramMap.get('id');

    // TODO: how to remove this setTimeOut?
    setTimeout(() => {
      this.list = this.todoService.getList(id);
    });
  }

  addItem() {
    if (this.itemName.length) {
      const newTask = new Task(this.itemName);
      this.list.tasks.push(newTask);

      this.itemName = '';
      this.todoService.saveData();
    }
  }

  deleteItem(index: number) {
    this.list.tasks.splice(index, 1);
    this.todoService.saveData();
  }

  toggleCheck(item: Task) {
    const pending = this.list.tasks.filter(task => !task.completed).length;

    this._checkCompleted(pending);
    this.todoService.saveData();
  }

  private _checkCompleted(pending: number) {
    if (!pending) {
      this.list.completedAt = new Date();
      this.list.completed = true;
    } else {
      this.list.completedAt = null;
      this.list.completed = false;
    }
  }
}
