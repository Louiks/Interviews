import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RowComponent } from 'src/app/components/data-grid/row/row.component';

@NgModule({
  declarations: [RowComponent],
  exports: [RowComponent],
  imports: [CommonModule],
})
export class RowModule {}
