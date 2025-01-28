import { TestBed } from '@angular/core/testing';

import { EmployeesEntityService } from './employees-entity.service';

describe('EmployeesEntityService', () => {
  let service: EmployeesEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
