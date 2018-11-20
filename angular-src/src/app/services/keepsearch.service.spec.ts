import { TestBed } from '@angular/core/testing';

import { KeepResultService } from './keep-result.service';

describe('KeepResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeepResultService = TestBed.get(KeepResultService);
    expect(service).toBeTruthy();
  });
});
