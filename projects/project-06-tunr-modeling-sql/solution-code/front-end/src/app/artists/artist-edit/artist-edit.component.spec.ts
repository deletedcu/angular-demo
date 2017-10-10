import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistEditComponent } from './artist-edit.component';

describe('ArtistEditComponent', () => {
  let component: ArtistEditComponent;
  let fixture: ComponentFixture<ArtistEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
