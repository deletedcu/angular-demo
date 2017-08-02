import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TieFighterComponent } from './tie-fighter.component';

describe('TieFighterComponent', () => {
  let component: TieFighterComponent;
  let fixture: ComponentFixture<TieFighterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TieFighterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TieFighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
