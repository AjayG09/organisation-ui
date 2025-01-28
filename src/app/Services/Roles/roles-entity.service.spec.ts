import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RolesEntityService } from './roles-entity.service';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

describe('RolesEntityService', () => {
  let service: RolesEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        EntityDataService,
        EntityDefinitionService,
        EntityCollectionServiceElementsFactory,
      ],
    });
    service = TestBed.inject(RolesEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
