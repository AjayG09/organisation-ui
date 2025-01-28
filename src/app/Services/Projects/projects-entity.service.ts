import { Injectable } from '@angular/core';
import { Project } from '../../Model/Project';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable({
  providedIn: 'root',
})
export class ProjectsEntityService extends EntityCollectionServiceBase<Project> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Project', serviceElementsFactory);
  }
}
