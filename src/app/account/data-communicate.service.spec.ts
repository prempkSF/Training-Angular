import { TestBed } from '@angular/core/testing';

import { DataCommunicateService } from './data-communicate.service';

describe('DataCommunicateService', () => {
  let service: DataCommunicateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCommunicateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
