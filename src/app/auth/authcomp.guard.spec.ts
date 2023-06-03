import { TestBed } from '@angular/core/testing';

import { AuthcompGuard } from './authcomp.guard';

describe('AuthcompGuard', () => {
  let guard: AuthcompGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthcompGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
