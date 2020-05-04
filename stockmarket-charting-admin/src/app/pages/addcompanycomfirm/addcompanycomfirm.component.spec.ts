import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcompanycomfirmComponent } from './addcompanycomfirm.component';

describe('AddcompanycomfirmComponent', () => {
  let component: AddcompanycomfirmComponent;
  let fixture: ComponentFixture<AddcompanycomfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcompanycomfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcompanycomfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
