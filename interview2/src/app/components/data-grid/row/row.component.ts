import { Component, Input, OnInit } from '@angular/core';

import { IFlight } from 'src/app/models/flight.interface';
import { ModalService } from 'src/app/services/modal.service';

const registration = 'Registration';
const cancel = 'Cancel';
const save = 'Save';

@Component({
  selector: 'data-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
})
export class RowComponent implements OnInit {
  @Input() public row!: IFlight;
  @Input() public registrations: string[] = [];

  public currentRegistration = '';
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    console.log('one');

    this.currentRegistration = this.row.registration;
  }

  public openModal(): void {
    this.modalService
      .openDialog(
        'Registration',
        this.row.scheduledDate,
        registration,
        cancel,
        save,
        this.registrations,
        this.row.registration
      )
      .subscribe((result) => {
        this.currentRegistration = result;
      });
  }
}
