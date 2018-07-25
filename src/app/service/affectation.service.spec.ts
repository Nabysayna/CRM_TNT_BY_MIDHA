import { TestBed, inject } from '@angular/core/testing';

import { AffectationService } from './affectation.service';

describe('AffectationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AffectationService]
    });
  });

  it('should be created', inject([AffectationService], (service: AffectationService) => {
    expect(service).toBeTruthy();
  }));
});
