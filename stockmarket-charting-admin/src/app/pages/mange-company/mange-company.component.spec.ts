import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeCompanyComponent } from './mange-company.component';

describe('MangeCompanyComponent', () => {
  let component: MangeCompanyComponent;
  let fixture: ComponentFixture<MangeCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangeCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangeCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
