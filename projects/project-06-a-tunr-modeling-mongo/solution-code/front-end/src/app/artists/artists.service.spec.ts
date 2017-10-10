import { TestBed, inject } from '@angular/core/testing';

import { ArtistsService } from './artists.service';

describe('ArtistsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtistsService]
    });
  });

  it('should be created', inject([ArtistsService], (service: ArtistsService) => {
    expect(service).toBeTruthy();
  }));
});
