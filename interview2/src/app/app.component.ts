import { Component, OnInit } from '@angular/core';

import { IFlight } from 'src/app/models/flight.interface';
import { FlightScheduleService } from './services/flight-schedule.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public data: IFlight[] = [];
  public registrations: string[] = [];
  constructor(private flightService: FlightScheduleService) {}

  ngOnInit(): void {
    this.flightService.getFlightSchedules().subscribe((fileData) => {
      let csvToRowArray = fileData.split('\n');
      for (let index = 1; index < csvToRowArray.length - 1; index++) {
        let row = csvToRowArray[index].split(',');
        this.data.push({
          flightNumber: row[1],
          scheduledDate: new Date(Number(row[2])),
          originDestination: row[3],
          registration: row[4].replace(/\s/g, ''),
        });
      }
    });
    this.flightService.getRegistrations().subscribe((fileData) => {
      this.registrations = fileData.split(/\s/g).filter(this.isNotEmptyString);
    });
  }

  private isNotEmptyString(str: string): boolean {
    return str !== '';
  }
}
