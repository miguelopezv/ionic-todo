import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { List } from '../models/list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  doneLists: List[];
  constructor(public todoService: TodoService, private router: Router) {}

  goToList(listId: number) {
    this.router.navigateByUrl(`/tabs/tab2/add/${listId}`);
  }

  deleteList(id: number) {
    this.todoService.deleteList(id);
  }
}
