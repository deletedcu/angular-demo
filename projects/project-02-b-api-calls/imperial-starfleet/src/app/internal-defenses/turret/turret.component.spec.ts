import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurretComponent } from './turret.component';

describe('TurretComponent', () => {
  let component: TurretComponent;
  let fixture: ComponentFixture<TurretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
