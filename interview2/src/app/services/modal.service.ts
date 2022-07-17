import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { GeneralPopUpComponent } from '../components/popups/general-pop-up/general-pop-up.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(public dialog: MatDialog) {}

  openDialog(
    mainHeader: string,
    dateTimeHeader: Date,
    controlLabel: string,
    rejectButtonText: string,
    acceptButtonText: string,
    listOfValues: string[],
    selectedValue: string
  ): Observable<string> {
    const dialogRef = this.dialog.open(GeneralPopUpComponent, {
      panelClass: 'custom-dialog-container',
      width: '359px',
      height: '230px',
      data: {
        mainHeader: mainHeader,
        dateTimeHeader: dateTimeHeader,
        controlLabel: controlLabel,
        rejectButtonText: rejectButtonText,
        acceptButtonText: acceptButtonText,
        listOfValues: listOfValues,
      },
    });
    const instance = dialogRef.componentInstance;
    instance.currentValue = selectedValue;
    return dialogRef.afterClosed();
  }
}
