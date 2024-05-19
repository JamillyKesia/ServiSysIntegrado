import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authCoordGuard } from './auth-coord.guard';

describe('authCoordGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authCoordGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
