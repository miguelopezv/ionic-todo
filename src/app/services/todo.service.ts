import { Injectable } from '@angular/core';
import { List } from '../models/list.model';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  lists: List[];

  constructor(private storage: Storage) {
    this._loadData();
  }

  addList(title: string) {
    const list = new List(title);
    this.lists.push(list);
    this.saveData();

    return list.id;
  }

  getList(id: number) {
    return this.lists.find(list => list.id === id);
  }

  saveData() {
    this.storage.set('lists', this.lists);
  }

  deleteList(id: number) {
    this.lists = this.lists.filter(list => list.id !== id);
    this.saveData();
  }

  private _loadData() {
    this.storage.get('lists').then(data => {
      this.lists = data !== null ? data : [];
    });
  }
}
