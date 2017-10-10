import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongNewComponent } from './song-new.component';

describe('SongNewComponent', () => {
  let component: SongNewComponent;
  let fixture: ComponentFixture<SongNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
