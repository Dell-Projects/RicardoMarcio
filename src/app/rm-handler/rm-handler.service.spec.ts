import { TestBed } from '@angular/core/testing';

import { RmHandlerService } from './rm-handler.service';

describe('RmHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RmHandlerService = TestBed.get(RmHandlerService);
    expect(service).toBeTruthy();
  });
});
