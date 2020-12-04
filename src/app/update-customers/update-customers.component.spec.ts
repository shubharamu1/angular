import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomersComponent } from './update-customers.component';

describe('UpdateCustomersComponent', () => {
  let component: UpdateCustomersComponent;
  let fixture: ComponentFixture<UpdateCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
