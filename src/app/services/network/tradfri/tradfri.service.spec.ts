import { TestBed } from '@angular/core/testing';

import { TradfriService } from './tradfri.service';

describe('TradfriService', () => {
  let service: TradfriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradfriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
