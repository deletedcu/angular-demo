import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongShowComponent } from './song-show.component';

describe('SongShowComponent', () => {
  let component: SongShowComponent;
  let fixture: ComponentFixture<SongShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
