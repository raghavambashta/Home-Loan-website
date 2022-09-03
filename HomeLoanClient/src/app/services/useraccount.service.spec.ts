import { TestBed } from '@angular/core/testing';

import { UseraccountService } from './useraccount.service';

describe('UseraccountService', () => {
  let service: UseraccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseraccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
