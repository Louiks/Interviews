import {
  Component,
  Inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder, UntypedFormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-general-pop-up',
  templateUrl: './general-pop-up.component.html',
  styleUrls: ['./general-pop-up.component.scss'],
})
export class GeneralPopUpComponent implements OnInit {
  @Input()
  public currentValue: string = '';
  public previousValue: string = '';
  public optionsCtrl: UntypedFormControl = new UntypedFormControl();
  public optionFilterCtrl: UntypedFormControl = new UntypedFormControl();
  public filteredOptions: ReplaySubject<string[]> = new ReplaySubject<string[]>(
    1
  );
  public mainForm = this.fb.group({ name: [''] });
  protected _onDestroy = new Subject<void>();

  @ViewChild('singleSelect', { static: true })
  singleSelect!: MatSelect;

  constructor(
    public dialogRef: MatDialogRef<GeneralPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.previousValue = this.currentValue;
    this.optionsCtrl.setValue(this.currentValue);
    this.filteredOptions.next(this.data.listOfValues.slice());
    this.optionFilterCtrl.valueChanges.pipe().subscribe(() => {
      this.filterBanks();
    });
    this.optionsCtrl.valueChanges.pipe().subscribe((newValue) => {
      this.currentValue = newValue;
    });
  }

  onNoClick(): void {
    this.dialogRef.close(this.previousValue);
  }

  onOkClick(): void {
    this.dialogRef.close(this.currentValue);
  }

  protected filterBanks() {
    if (!this.data.listOfValues) {
      return;
    }
    let search = this.optionFilterCtrl.value;
    if (!search) {
      this.filteredOptions.next(this.data.listOfValues.slice());
      return;
    }
    this.filteredOptions.next(
      this.data.listOfValues.filter(
        (option: string) => option.indexOf(search) > -1
      )
    );
  }
}
