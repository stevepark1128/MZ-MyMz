import { TestBed } from '@angular/core/testing';

import { MzCommonService } from './mz-common.service';

describe('MzCommonService', () => {
  let service: MzCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MzCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
