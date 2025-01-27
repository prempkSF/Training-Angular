import { TestBed } from '@angular/core/testing';

import { ReactiveControlService } from './reactive-control.service';

describe('ReactiveControlService', () => {
  let service: ReactiveControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactiveControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
