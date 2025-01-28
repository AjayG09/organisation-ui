import { Injectable } from '@angular/core';
import { Client } from '../../Model/Client';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable({
  providedIn: 'root',
})
export class ClientsEntityService extends EntityCollectionServiceBase<Client> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Client', serviceElementsFactory);
  }
}
