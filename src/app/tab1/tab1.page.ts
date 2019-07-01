import { AlertController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { List } from '../models/list.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  lists: List[];

  constructor(
    public todoService: TodoService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async addList(listConfig?: { list: List; listElement: any }) {
    const alert = await this.alertController.create({
      header: listConfig ? 'Edit list' : 'New List',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: listConfig ? listConfig.list.title : '',
          placeholder: 'List name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => listConfig.listElement.closeSlidingItems()
        },
        {
          text: 'Save',
          handler: data => {
            if (listConfig) {
              listConfig.list.title = data.title;
              this.todoService.saveData();
              listConfig.listElement.closeSlidingItems();
            } else if (data.title.length) {
              const listId: number = this.todoService.addList(data.title);
              this.goToList(listId);
            }
          }
        }
      ]
    });

    await alert.present();
  }

  goToList(listId: number) {
    this.router.navigateByUrl(`/tabs/tab1/add/${listId}`);
  }

  deleteList(id: number) {
    this.todoService.deleteList(id);
  }
}
