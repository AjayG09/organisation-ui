import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ClientsEntityService } from '../../Services/Clients/clients-entity.service';
import { filter, first, tap } from 'rxjs';

export const clientsResolver: ResolveFn<boolean> = (route, state) => {
  const clientService = inject(ClientsEntityService);

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
