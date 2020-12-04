import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGriveancesComponent } from './admin-griveances.component';

describe('AdminGriveancesComponent', () => {
  let component: AdminGriveancesComponent;
  let fixture: ComponentFixture<AdminGriveancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGriveancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGriveancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
