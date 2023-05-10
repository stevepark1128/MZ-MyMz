import { TestBed } from '@angular/core/testing';

import { MzMenuService } from './mz-menu.service';

describe('MzMenuService', () => {
  let service: MzMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MzMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
