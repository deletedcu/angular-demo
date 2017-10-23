import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonComponent } from './person.component';

describe('PersonComponent', () => {
  let person: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComponent);
    person = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(person).toBeTruthy();
  });

  it('should have a name', () => {
    expect(person.personName).toBeTruthy();
  });

  it(`should default <language> to 'English'`, () => {
    expect(person.language).toEqual('English');
  })

  describe('greeting', () => {
    describe('for default language (English)', () => {
      it('should offer a greeting in English', () => {
        expect(person.greeting()).toEqual("Hello, my name is Bob.");
      })
    })
    describe(`when language is 'Italian'`, () => {
      it('should offer a greeting in Italian', () => {
        person.language = "Italian";
        person.personName = "Tony";
        expect(person.greeting()).toEqual("Ciao, mi chiamo Tony.");
      })
    })
  })
});
