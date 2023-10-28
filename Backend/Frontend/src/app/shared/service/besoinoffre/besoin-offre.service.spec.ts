import { TestBed } from '@angular/core/testing';

import { BesoinOffreService } from './besoin-offre.service';

describe('BesoinOffreService', () => {
  let service: BesoinOffreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BesoinOffreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
