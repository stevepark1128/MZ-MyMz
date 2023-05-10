import { TestBed } from '@angular/core/testing';

import { MzSharedService } from './mz-shared.service';

describe('MzSharedService', () => {
  let service: MzSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MzSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
