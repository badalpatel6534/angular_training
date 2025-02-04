import { TestBed } from '@angular/core/testing';

import { SrpTodoService } from './srp-todo.service';

describe('SrpTodoService', () => {
  let service: SrpTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrpTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
