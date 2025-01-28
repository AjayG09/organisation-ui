import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { filter, first, tap } from 'rxjs';
import { ProjectsEntityService } from '../../Services/Projects/projects-entity.service';

export const projectsResolver: ResolveFn<boolean> = (route, state) => {
  const clientService = inject(ProjectsEntityService);

  return clientService.loaded$.pipe(
    tap((loaded) => {
      if (!loaded) {
        clientService.getAll();
      }
    }),
    filter((loaded) => !!loaded),
    first(),
  );
};
