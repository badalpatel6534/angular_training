import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { rolebasedloadGuard } from './rolebasedload.guard';

describe('rolebasedloadGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => rolebasedloadGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
