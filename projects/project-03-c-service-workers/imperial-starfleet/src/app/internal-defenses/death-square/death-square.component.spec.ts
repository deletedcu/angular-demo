import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathSquareComponent } from './death-square.component';

describe('DeathSquareComponent', () => {
  let component: DeathSquareComponent;
  let fixture: ComponentFixture<DeathSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
