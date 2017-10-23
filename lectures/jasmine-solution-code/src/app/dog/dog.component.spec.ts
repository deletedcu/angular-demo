import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogComponent } from './dog.component';

describe('DogComponent', () => {
  let component: DogComponent;
  let fixture: ComponentFixture<DogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a name', () => {
    expect(component.dogName).toBeTruthy();
  });

  it('should allow the reading of hungerLevel', () => {
    expect(component.hungerLevel).toEqual(0);
  });

  it('should allow the writing of hungerLevel', () => {
    component.hungerLevel = 5;
    expect(component.hungerLevel).toEqual(5);
  });

  describe('eat', () => {
    describe('when dog is hungry', () => {
      it('decrements the hunger level when invoked', () => {
        component.hungerLevel = 5;
        component.eat();
        expect(component.hungerLevel).toEqual(4);
      })
    })
    describe('when dog is NOT hungry', () => {
      it('does NOT decrement the hunger level when invoked', () => {
        component.hungerLevel = 0;
        component.eat();
        expect(component.hungerLevel).toEqual(0);
      })    
    })
  })
});
