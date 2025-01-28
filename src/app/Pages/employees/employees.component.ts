import { Component, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable } from 'rxjs';
import { Employee } from '../../Model/Employee';
import { MatDialog } from '@angular/material/dialog';
import { EmployeesEntityService } from '../../Services/Employees/employees-entity.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RolesEntityService } from '../../Services/Roles/roles-entity.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss',
  standalone: false,
})
export class EmployeesComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'phone',
    'role',
    'status',
    'actions',
  ];
  dataSource$!: Observable<MatTableDataSource<Employee>>; // Observable of MatTableDataSource of Employee[]
  private rolesService = inject(RolesEntityService);

  readonly dialog = inject(MatDialog);

  constructor(private employeeService: EmployeesEntityService) {
    this.dataSource$ = this.employeeService.entities$.pipe(
      map((employees) => {
        return new MatTableDataSource<Employee>(employees);
      }),
    );
  }

  openDialog(): void {
    this.dialog.open(AddEmployeeComponent, {
      enterAnimationDuration: '200ms',
    });
  }

  edit(id: number): void {
    this.dialog.open(AddEmployeeComponent, {
      enterAnimationDuration: '200ms',
      data: {
        id,
      },
    });
  }

  deleteEmployee(id: number): void {
    this.employeeService.delete(id).subscribe(() => {
      this.dataSource$.pipe(
        map((dataSource) => {
          dataSource.data = dataSource.data.filter(
            (employee: Employee) => employee.id !== id,
          );
          return dataSource;
        }),
      );
    });
  }

  getRoleName(id: number) {
    return this.rolesService.entities$.pipe(
      map((roles) => {
        const role = roles.find((role) => role.id === id);
        return role?.name;
      }),
    );
  }
}
