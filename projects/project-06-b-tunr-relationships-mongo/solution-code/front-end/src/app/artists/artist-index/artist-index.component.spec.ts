import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistIndexComponent } from './artist-index.component';

describe('ArtistIndexComponent', () => {
  let component: ArtistIndexComponent;
  let fixture: ComponentFixture<ArtistIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
