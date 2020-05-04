import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeStockComponent } from './mange-stock.component';

describe('MangeStockComponent', () => {
  let component: MangeStockComponent;
  let fixture: ComponentFixture<MangeStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangeStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangeStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
