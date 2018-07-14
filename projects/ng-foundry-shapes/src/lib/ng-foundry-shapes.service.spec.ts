import { TestBed, inject } from '@angular/core/testing';

import { NgFoundryShapesService } from './ng-foundry-shapes.service';

describe('NgFoundryShapesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgFoundryShapesService]
    });
  });

  it('should be created', inject([NgFoundryShapesService], (service: NgFoundryShapesService) => {
    expect(service).toBeTruthy();
  }));
});
