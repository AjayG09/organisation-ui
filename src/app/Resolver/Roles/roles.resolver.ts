import { ResolveFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { RolesEntityService } from '../../Services/Roles/roles-entity.service';
import { filter, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RolesResolver {
  constructor(private rolesService: RolesEntityService) {}

  resolve: ResolveFn<boolean> = (route, state) => {
    return this.rolesService.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          this.rolesService.getAll();
        }
      }),
      filter((loaded) => !!loaded),
      first(),
    );
  };
}
