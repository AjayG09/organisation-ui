import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { employeesResolver } from './employees.resolver';

describe('employeesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() =>
      employeesResolver(...resolverParameters),
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
