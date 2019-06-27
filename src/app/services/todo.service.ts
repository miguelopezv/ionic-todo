import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  lists: List[] = [];

  constructor() {
    const list1 = new List('Bands I like');
    const list2 = new List('Games to buy');

    this.lists.push(list1, list2);
  }
}
