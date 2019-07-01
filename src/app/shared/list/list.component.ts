import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';
import { List } from 'src/app/models/list.model';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() lists: List[];
  @Output() goTo = new EventEmitter();
  @Output() deleteList = new EventEmitter();
  @Output() editList = new EventEmitter();
  @ViewChild(IonList) ionList: IonList;

  onClick(id: number) {
    this.goTo.emit(id);
  }

  onDelete(id: number) {
    this.deleteList.emit(id);
  }

  onEdit(list: List) {
    this.editList.emit({ list, listElement: this.ionList });
  }
}
