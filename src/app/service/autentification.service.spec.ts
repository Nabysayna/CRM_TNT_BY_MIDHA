import { TestBed, inject } from '@angular/core/testing';

import { AutentificationService } from './autentification.service';

describe('AutentificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutentificationService]
    });
  });

  it('should be created', inject([AutentificationService], (service: AutentificationService) => {
    expect(service).toBeTruthy();
  }));
});
