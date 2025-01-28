import { Component, inject } from '@angular/core';
import { RolesEntityService } from '../../Services/Roles/roles-entity.service';
import { map, Observable } from 'rxjs';
import { Role } from '../../Model/Role';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddRoleComponent } from './add-role/add-role.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss',
  standalone: false,
})
export class RolesComponent {
  displayedColumns: string[] = ['id', 'name', 'actions'];

  dataSource$!: Observable<MatTableDataSource<Role>>; // Observable of MatTableDataSource of Role[]

  readonly dialog = inject(MatDialog);

  constructor(private rolesService: RolesEntityService) {
    this.dataSource$ = this.rolesService.entities$.pipe(
      map((roles) => {
        return new MatTableDataSource<Role>(roles);
      }),
    );
  }

  openDialog(): void {
    this.dialog.open(AddRoleComponent, {
      width: '300px',
      enterAnimationDuration: '300ms',
    });
  }

  editRole(id: number): void {
    this.dialog.open(AddRoleComponent, {
      width: '300px',
      enterAnimationDuration: '300ms',
      data: {
        id,
      },
    });
  }

  // Add function to take id and delete row
  deleteRole(id: number): void {
    this.rolesService.delete(id).subscribe(() => {
      this.dataSource$.pipe(
        map((dataSource) => {
          dataSource.data = dataSource.data.filter(
            (role: Role) => role.id !== id,
          );
          return dataSource;
        }),
      );
    });
  }
}
