import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() lists: List[];
  @Output() goTo = new EventEmitter();
  @Output() deleteList = new EventEmitter();

  onClick(id: number) {
    this.goTo.emit(id);
  }

  onDelete(id: number) {
    this.deleteList.emit(id);
  }
}
