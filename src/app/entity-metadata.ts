import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Role: {},
  Client: {},
  Employee: {},
  Project: {},
};

const pluralNames = {
  Role: 'Roles',
  Client: 'Clients',
  Project: 'Projects',
  Employee: 'Employees',
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
