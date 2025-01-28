import { TestBed } from '@angular/core/testing';

import { ClientsEntityService } from './clients-entity.service';

describe('ClientsEntityService', () => {
  let service: ClientsEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
