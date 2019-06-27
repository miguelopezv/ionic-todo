import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { List } from '../models/list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  lists: List[];
  constructor(public todoService: TodoService, private router: Router) {}

  addList() {
    this.router.navigateByUrl('/tabs/tab1/add');
  }
}
