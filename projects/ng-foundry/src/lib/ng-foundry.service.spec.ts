import { TestBed, inject } from '@angular/core/testing';

import { NgFoundryService } from './ng-foundry.service';

describe('NgFoundryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgFoundryService]
    });
  });

  it('should be created', inject([NgFoundryService], (service: NgFoundryService) => {
    expect(service).toBeTruthy();
  }));
});
