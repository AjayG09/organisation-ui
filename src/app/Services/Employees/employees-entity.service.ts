import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Employee } from '../../Model/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeesEntityService extends EntityCollectionServiceBase<Employee> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Employee', serviceElementsFactory);
  }
}
