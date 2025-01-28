import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, map } from 'rxjs';
import { Project } from '../../Model/Project';
import { ProjectsEntityService } from '../../Services/Projects/projects-entity.service';
import { AddProjectComponent } from './add-project/add-project.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  standalone: false,
})
export class ProjectsComponent {
  displayedColumns: string[] = [
    'id',
    'projectName',
    'startDate',
    'expectedEndDate',
    'leadByEmpId',
    'contactPerson',
    'totalEmpWorking',
    'projectCost',
    'actions',
  ];

  dataSource$!: Observable<MatTableDataSource<Project>>; // Observable of MatTableDataSource of Role[]

  readonly dialog = inject(MatDialog);

  constructor(private projectsService: ProjectsEntityService) {
    this.dataSource$ = this.projectsService.entities$.pipe(
      map((projects) => {
        return new MatTableDataSource<Project>(projects);
      }),
    );
  }

  openDialog(): void {
    this.dialog.open(AddProjectComponent, {
      // width: '300px',
      enterAnimationDuration: '200ms',
    });
  }

  editProject(id: number): void {
    this.dialog.open(AddProjectComponent, {
      // width: '300px',
      enterAnimationDuration: '200ms',
      data: {
        id,
      },
    });
  }

  deleteProject(id: number): void {
    this.projectsService.delete(id).subscribe(() => {
      this.dataSource$.pipe(
        map((dataSource) => {
          dataSource.data = dataSource.data.filter(
            (project: Project) => project.id !== id,
          );
          return dataSource;
        }),
      );
    });
  }
}
