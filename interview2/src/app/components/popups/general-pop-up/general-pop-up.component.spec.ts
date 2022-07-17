import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPopUpComponent } from './general-pop-up.component';

describe('GeneralPopUpComponent', () => {
  let component: GeneralPopUpComponent;
  let fixture: ComponentFixture<GeneralPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralPopUpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
