import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGriveancesComponent } from './customer-griveances.component';

describe('CustomerGriveancesComponent', () => {
  let component: CustomerGriveancesComponent;
  let fixture: ComponentFixture<CustomerGriveancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerGriveancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerGriveancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
