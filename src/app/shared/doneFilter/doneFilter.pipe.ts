import { Pipe, PipeTransform } from '@angular/core';
import { List } from 'src/app/models/list.model';

@Pipe({
  name: 'doneFilter',
  pure: false
})
export class DoneFilterPipe implements PipeTransform {
  transform(lists: List[], completed: boolean = false): List[] {
    return lists.filter(list => list.completed === completed);
  }
}
