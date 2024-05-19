import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authFuncionarioGuard } from './auth-funcionario.guard';

describe('authFuncionarioGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authFuncionarioGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
