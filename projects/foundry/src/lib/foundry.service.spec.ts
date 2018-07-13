import { TestBed, inject } from '@angular/core/testing';

import { FoundryService } from './foundry.service';

describe('FoundryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoundryService]
    });
  });

  it('should be created', inject([FoundryService], (service: FoundryService) => {
    expect(service).toBeTruthy();
  }));
});
