import { Component, Input } from '@angular/core';

import { IFlight } from 'src/app/models/flight.interface';

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
})
export class DataGridComponent {
  public readonly sampleHeaders = [
    'flight',
    'sch. date',
    'sch.time',
    'o/d',
    'registration',
  ];

  @Input() public rows: IFlight[] = [];
  @Input() public registrations: string[] = [];
}
