import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerEditComponent } from './manager-edit.component';

describe('ManagerEditComponent', () => {
  let component: ManagerEditComponent;
  let fixture: ComponentFixture<ManagerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
