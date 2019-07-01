import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { IonicModule } from '@ionic/angular';
import { DoneFilterPipe } from './doneFilter/doneFilter.pipe';

@NgModule({
  declarations: [ListComponent, DoneFilterPipe],
  imports: [CommonModule, IonicModule],
  exports: [ListComponent, DoneFilterPipe]
})
export class SharedModule {}
