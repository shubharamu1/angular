import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCutomersComponent } from './delete-cutomers.component';

describe('DeleteCutomersComponent', () => {
  let component: DeleteCutomersComponent;
  let fixture: ComponentFixture<DeleteCutomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCutomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCutomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
