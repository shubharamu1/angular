import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaytobeneficiaryComponent } from './paytobeneficiary.component';

describe('PaytobeneficiaryComponent', () => {
  let component: PaytobeneficiaryComponent;
  let fixture: ComponentFixture<PaytobeneficiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaytobeneficiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaytobeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
