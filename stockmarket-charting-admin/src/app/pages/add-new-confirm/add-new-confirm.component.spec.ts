import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewConfirmComponent } from './add-new-confirm.component';

describe('AddNewConfirmComponent', () => {
  let component: AddNewConfirmComponent;
  let fixture: ComponentFixture<AddNewConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
