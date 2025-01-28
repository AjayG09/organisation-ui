import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Role } from '../../Model/Role';

@Injectable({
  providedIn: 'root',
})
export class RolesEntityService extends EntityCollectionServiceBase<Role> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Role', serviceElementsFactory);
  }
}
