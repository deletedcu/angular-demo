import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaserCannonComponent } from './laser-cannon.component';

describe('LaserCannonComponent', () => {
  let component: LaserCannonComponent;
  let fixture: ComponentFixture<LaserCannonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaserCannonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaserCannonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
