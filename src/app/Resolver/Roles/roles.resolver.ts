import { ResolveFn } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { RolesEntityService } from '../../Services/Roles/roles-entity.service';
import { filter, first, tap } from 'rxjs';

export const rolesResolver: ResolveFn<boolean> = (route, state) => {
  const rolesService = inject(RolesEntityService);
  return rolesService.loaded$.pipe(
    tap((loaded) => {
      if (!loaded) {
        rolesService.getAll();
      }
    }),
    filter((loaded) => !!loaded),
    first(),
  );
};
