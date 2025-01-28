import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { filter, first, tap } from 'rxjs';
import { EmployeesEntityService } from '../../Services/Employees/employees-entity.service';

export const employeesResolver: ResolveFn<boolean> = (route, state) => {
  const clientService = inject(EmployeesEntityService);

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
