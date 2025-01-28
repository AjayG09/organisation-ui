import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employee } from '../../../Model/Employee';
import { EmployeesEntityService } from '../../../Services/Employees/employees-entity.service';
import { RolesEntityService } from '../../../Services/Roles/roles-entity.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss',
  standalone: false,
})
export class AddEmployeeComponent implements OnInit {
  employeeForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    role: new FormControl(''),
    status: new FormControl(''),
  });

  rolesService = inject(RolesEntityService);

  private dialogRef = inject(MatDialogRef<AddEmployeeComponent>);

  private employeeService = inject(EmployeesEntityService);

  readonly data = inject<Employee>(MAT_DIALOG_DATA);

  ngOnInit(): void {
    if (this.data !== null && this.data.id) {
      this.employeeService.entities$
        .pipe(
          map((employees) =>
            employees.find((employee) => employee.id === this.data.id),
          ),
        )
        .subscribe((data) => {
          if (data !== undefined) {
            this.employeeForm.patchValue({
              name: data.name,
              email: data.email,
              phone: data.phone,
              address: data.address,
              role: data.role,
              status: data.status,
            });
          }
        });
    }
  }

  onSubmit(): void {
    if (this.data !== null && this.data.id) {
      // Edit Employee
      this.employeeService
        .update({
          id: this.data.id,
          name: this.employeeForm.value.name as string,
          email: this.employeeForm.value.email as string,
          phone: this.employeeForm.value.phone as string,
          address: this.employeeForm.value.address as string,
          role: this.employeeForm.value.role as string,
          status: this.employeeForm.value.status as string,
          updated_at: new Date().toISOString(),
        })
        .subscribe(() => {
          this.dialogRef.close();
        });
      return;
    } else {
      // Add Employee
      this.employeeService
        .add({
          name: this.employeeForm.value.name as string,
          email: this.employeeForm.value.email as string,
          phone: this.employeeForm.value.phone as string,
          address: this.employeeForm.value.address as string,
          role: this.employeeForm.value.role as string,
          status: this.employeeForm.value.status as string,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .subscribe(() => {
          this.dialogRef.close();
        });
    }
  }
}
