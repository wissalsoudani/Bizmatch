import { TestBed } from '@angular/core/testing';

import { MiseenrelationService } from './miseenrelation.service';

describe('MiseenrelationService', () => {
  let service: MiseenrelationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiseenrelationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
