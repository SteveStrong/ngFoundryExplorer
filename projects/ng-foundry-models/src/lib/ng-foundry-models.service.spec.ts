import { TestBed, inject } from '@angular/core/testing';

import { NgFoundryModelsService } from './ng-foundry-models.service';

describe('NgFoundryModelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgFoundryModelsService]
    });
  });

  it('should be created', inject([NgFoundryModelsService], (service: NgFoundryModelsService) => {
    expect(service).toBeTruthy();
  }));
});
