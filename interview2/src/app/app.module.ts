import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from 'src/app/app.component';
import { DataGridModule } from 'src/app/components/data-grid/data-grid.module';
import { HttpClientModule } from '@angular/common/http';
import { GeneralPopUpComponent } from './components/popups/general-pop-up/general-pop-up.component';
import { ModalService } from './services/modal.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
@NgModule({
  declarations: [AppComponent, GeneralPopUpComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    DataGridModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
  ],
  providers: [ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
