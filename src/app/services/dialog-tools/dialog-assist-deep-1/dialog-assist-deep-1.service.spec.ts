import { TestBed } from '@angular/core/testing';

import { DialogAssistDeep1Service } from './dialog-assist-deep-1.service';

describe('DialogAssistDeep1Service', () => {
  let service: DialogAssistDeep1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogAssistDeep1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
