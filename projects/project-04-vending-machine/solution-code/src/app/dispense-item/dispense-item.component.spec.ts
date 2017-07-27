import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispenseItemComponent } from './dispense-item.component';

describe('DispenseItemComponent', () => {
  let component: DispenseItemComponent;
  let fixture: ComponentFixture<DispenseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispenseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispenseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
