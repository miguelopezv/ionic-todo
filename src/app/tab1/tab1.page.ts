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

  async addList() {
    const alert = await this.alertController.create({
      header: 'New List',
      inputs: [{ name: 'title', type: 'text', placeholder: 'List name' }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => console.log('cancel')
        },
        {
          text: 'Save',
          handler: data => {
            if (data.title.length) {
              const listId: number = this.todoService.addList(data.title);
              this.router.navigateByUrl(`/tabs/tab1/add/${listId}`);
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
