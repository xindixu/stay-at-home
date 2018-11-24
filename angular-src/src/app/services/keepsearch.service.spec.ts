import { TestBed } from '@angular/core/testing';

import { KeepsearchService } from './keepsearch.service';

describe('KeepResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeepsearchService = TestBed.get(KeepsearchService);
    expect(service).toBeTruthy();
  });
});
