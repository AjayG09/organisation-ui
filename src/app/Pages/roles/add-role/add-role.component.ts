import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RolesEntityService } from '../../../Services/Roles/roles-entity.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs';

interface DialogData {
  id: number;
  name: string;
}
@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrl: './add-role.component.scss',
  standalone: false,
})
export class AddRoleComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);

  roleForm = new FormGroup({
    name: new FormControl(''),
  });

  rolesService = inject(RolesEntityService);

  dialogRef = inject(MatDialogRef<AddRoleComponent>);

  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  ngOnInit(): void {
    if (this.data !== null && this.data.id) {
      this.rolesService.entities$
        .pipe(map((roles) => roles.find((role) => role.id === this.data.id)))
        .subscribe((data) => {
          if (data !== undefined) {
            this.roleForm.patchValue({
              name: data.name,
            });
          }
        });
    }
  }

  onSubmit(): void {
    // Edit Role
    if (this.data !== null && this.data.id) {
      this.rolesService
        .update({
          id: this.data.id,
          name: this.roleForm.value.name as string,
        })
        .subscribe(() => {
          this._snackBar.open('Role updated successfully', 'Close', {
            duration: 2000,
          });
        });
      this.dialogRef.close();
      return;
    }
    // Add Role
    else {
      this.rolesService
        .add({
          name: this.roleForm.value.name as string,
        })
        .subscribe(() => {
          this._snackBar.open('Role added successfully', 'Close', {
            duration: 2000,
          });
        });

      this.dialogRef.close();
      return;
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
