import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerNewComponent } from './manager-new.component';

describe('ManagerNewComponent', () => {
  let component: ManagerNewComponent;
  let fixture: ComponentFixture<ManagerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
