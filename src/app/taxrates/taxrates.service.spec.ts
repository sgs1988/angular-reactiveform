import { TestBed } from '@angular/core/testing';

import { TaxratesService } from './taxrates.service';

describe('TaxratesService', () => {
  let service: TaxratesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxratesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
