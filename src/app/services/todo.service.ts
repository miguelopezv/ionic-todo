import { Injectable } from '@angular/core';
import { List } from '../models/list.model';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  lists: List[] = [];

  constructor(private storage: Storage) {
    this._loadData();
  }

  addList(title: string) {
    this.lists.push(new List(title));
    this._saveData();
  }

  private _saveData() {
    this.storage.set('lists', this.lists);
  }

  private async _loadData() {
    this.lists = await this.storage.get('lists');
    if (!this.lists) {
      this.lists = [];
    }
  }
}
