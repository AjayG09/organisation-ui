import { TestBed } from '@angular/core/testing';

import { RolesEntityService } from './roles-entity.service';

describe('RolesEntityService', () => {
  let service: RolesEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolesEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
