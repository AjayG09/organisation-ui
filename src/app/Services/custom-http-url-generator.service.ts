import {
  DefaultHttpUrlGenerator,
  HttpResourceUrls,
  normalizeRoot,
  Pluralizer,
} from '@ngrx/data';
import { Injectable } from '@angular/core';

@Injectable()
export class AppHttpUrlGenerator extends DefaultHttpUrlGenerator {
  constructor(private pluralize: Pluralizer) {
    super(pluralize);
  }

  override getResourceUrls(entityName: string, root: string): HttpResourceUrls {
    let resourceUrls = this.knownHttpResourceUrls[entityName];
    if (!resourceUrls) {
      const nRoot = normalizeRoot(root);
      resourceUrls = {
        entityResourceUrl: `http://localhost:3000/${this.pluralize.pluralize(
          entityName,
        )}/`.toLowerCase(),
        collectionResourceUrl:
          `http://localhost:3000/${this.pluralize.pluralize(
            entityName,
          )}/`.toLowerCase(),
      };
      this.registerHttpResourceUrls({ [entityName]: resourceUrls });
    }
    return resourceUrls;
  }
}
