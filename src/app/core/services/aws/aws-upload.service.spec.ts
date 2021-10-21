import { TestBed } from '@angular/core/testing';

import { AwsUploadService } from './aws-upload.service';

describe('AwsUploadService', () => {
  let service: AwsUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
