import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWindowComponent } from './info-window.component';

import { HttpModule } from '@angular/http';

import { RouterTestingModule } from '@angular/router/testing';

describe('InfoWindowComponent', () => {
  let component: InfoWindowComponent;
  let fixture: ComponentFixture<InfoWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoWindowComponent ],
      imports: [ HttpModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    console.log("AOAJEIWFOIJAWEF");
    expect(component).toBeTruthy();
  });

  it('should get data from the data banks', () => {
    expect(typeof(component.findTurret)).toBe('function');
  }); 
});
