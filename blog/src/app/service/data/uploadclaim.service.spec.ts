import { TestBed } from '@angular/core/testing';

import { UploadclaimService } from './uploadclaim.service';

describe('UploadclaimService', () => {
  let service: UploadclaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadclaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
