import { Injectable } from '@angular/core';
import { IFlight } from '../models/flight.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FlightScheduleService {
  private filepathWithMockedValues: any =
    'src/assets/mock-data/mockFlights.csv';

  constructor(private http: HttpClient) {}

  getFlightSchedules(): Observable<string> {
    return this.getMockedUpFlightSchedules();
  }

  private getMockedUpFlightSchedules(): Observable<string> {
    return this.http.get('assets/mock-data/mockFlights.csv', {
      responseType: 'text',
    });
  }

  getRegistrations(): Observable<string> {
    return this.getMockedUpRegistrations();
  }

  private getMockedUpRegistrations(): Observable<string> {
    return this.http.get('assets/mock-data/mockRegistrations.csv', {
      responseType: 'text',
    });
  }
}
