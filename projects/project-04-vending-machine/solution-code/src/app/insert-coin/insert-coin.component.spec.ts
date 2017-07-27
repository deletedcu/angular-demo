import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCoinComponent } from './insert-coin.component';

describe('InsertCoinComponent', () => {
  let component: InsertCoinComponent;
  let fixture: ComponentFixture<InsertCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
