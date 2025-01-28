import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientsEntityService } from '../../../Services/Clients/clients-entity.service';
import { Client } from '../../../Model/Client';
import { map } from 'rxjs';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.scss',
  standalone: false,
})
export class AddClientComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);
  private dialogRef = inject(MatDialogRef<AddClientComponent>);
  private clientService = inject(ClientsEntityService);

  clientForm = new FormGroup({
    companyName: new FormControl(''),
    contactPersonName: new FormControl(''),
    contactNo: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    pincode: new FormControl(''),
    state: new FormControl(''),
    employeeStrength: new FormControl(''),
    gstNo: new FormControl(''),
    regNo: new FormControl(''),
  });

  readonly data = inject<Client>(MAT_DIALOG_DATA);

  ngOnInit(): void {
    if (this.data !== null && this.data.id) {
      this.clientService.entities$
        .pipe(
          map((clients) =>
            clients.find((client) => client.id === this.data.id),
          ),
        )
        .subscribe((data) => {
          if (data !== undefined) {
            this.clientForm.patchValue({
              companyName: data.companyName,
              contactPersonName: data.contactPersonName,
              contactNo: data.contactNo,
              address: data.address,
              city: data.city,
              pincode: data.pincode,
              state: data.state,
              employeeStrength: data.employeeStrength,
              gstNo: data.gstNo,
              regNo: data.regNo,
            });
          }
        });
    }
  }

  onSubmit(): void {
    if (this.data !== null && this.data.id) {
      // Edit Client
      this.clientService
        .update({
          id: this.data.id,
          companyName: this.clientForm.value.companyName as string,
          contactPersonName: this.clientForm.value.contactPersonName as string,
          contactNo: this.clientForm.value.contactNo as string,
          address: this.clientForm.value.address as string,
          city: this.clientForm.value.city as string,
          pincode: this.clientForm.value.pincode as string,
          state: this.clientForm.value.state as string,
          employeeStrength: this.clientForm.value.employeeStrength as string,
          gstNo: this.clientForm.value.gstNo as string,
          regNo: this.clientForm.value.regNo as string,
        })
        .subscribe(() => {
          this._snackBar.open('Client updated successfully', 'Close', {
            duration: 2000,
          });
          this.dialogRef.close();
        });
    } else {
      // Add Client
      this.clientService
        .add({
          companyName: this.clientForm.value.companyName as string,
          contactPersonName: this.clientForm.value.contactPersonName as string,
          contactNo: this.clientForm.value.contactNo as string,
          address: this.clientForm.value.address as string,
          city: this.clientForm.value.city as string,
          pincode: this.clientForm.value.pincode as string,
          state: this.clientForm.value.state as string,
          employeeStrength: this.clientForm.value.employeeStrength as string,
          gstNo: this.clientForm.value.gstNo as string,
          regNo: this.clientForm.value.regNo as string,
        })
        .subscribe(() => {
          this._snackBar.open('Client added successfully', 'Close', {
            duration: 2000,
          });
          this.dialogRef.close();
        });
    }
  }
}
