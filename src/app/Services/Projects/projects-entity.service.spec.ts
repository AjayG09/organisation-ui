import { TestBed } from '@angular/core/testing';

import { ProjectsEntityService } from './projects-entity.service';

describe('ProjectsEntityService', () => {
  let service: ProjectsEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
