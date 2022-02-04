import { TestBed } from '@angular/core/testing';

import { EngraveService } from './engrave.service';

describe('EngraveService', () => {
  let service: EngraveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EngraveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
