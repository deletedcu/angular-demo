import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerShowComponent } from './manager-show.component';

describe('ManagerShowComponent', () => {
  let component: ManagerShowComponent;
  let fixture: ComponentFixture<ManagerShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
