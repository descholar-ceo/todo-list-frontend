import { TestBed } from '@angular/core/testing';

import { UiHandleService } from './ui-handle.service';

describe('UiService', () => {
  let service: UiHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
