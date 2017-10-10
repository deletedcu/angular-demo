import { TestBed, inject } from '@angular/core/testing';

import { ManagersService } from './managers.service';

describe('ManagersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagersService]
    });
  });

  it('should be created', inject([ManagersService], (service: ManagersService) => {
    expect(service).toBeTruthy();
  }));
});
