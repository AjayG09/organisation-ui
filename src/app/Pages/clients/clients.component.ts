import { Component, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable } from 'rxjs';
import { Client } from '../../Model/Client';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientsEntityService } from '../../Services/Clients/clients-entity.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
  standalone: false,
})
export class ClientsComponent {
  displayedColumns: string[] = [
    'id',
    'companyName',
    'contactPersonName',
    'contactNo',
    'actions',
  ];

  dataSource$!: Observable<MatTableDataSource<Client>>; // Observable of MatTableDataSource of Role[]

  readonly dialog = inject(MatDialog);

  constructor(private clientsService: ClientsEntityService) {
    this.dataSource$ = this.clientsService.entities$.pipe(
      map((clients) => {
        return new MatTableDataSource<Client>(clients);
      }),
    );
  }

  openDialog(): void {
    this.dialog.open(AddClientComponent, {
      enterAnimationDuration: '200ms',
    });
  }

  edit(id: number): void {
    this.dialog.open(AddClientComponent, {
      enterAnimationDuration: '200ms',
      data: {
        id,
      },
    });
  }

  deleteClient(id: number): void {
    this.clientsService.delete(id).subscribe(() => {
      this.dataSource$.pipe(
        map((dataSource) => {
          dataSource.data = dataSource.data.filter(
            (client: Client) => client.id !== id,
          );
          return dataSource;
        }),
      );
    });
  }
}
