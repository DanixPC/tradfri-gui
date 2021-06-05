import { TestBed } from '@angular/core/testing';

import { DialogAssistService } from './dialog-assist.service';

describe('DialogAssistService', () => {
  let service: DialogAssistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogAssistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
