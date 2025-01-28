import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Project } from '../../../Model/Project';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProjectsEntityService } from '../../../Services/Projects/projects-entity.service';
import { ClientsEntityService } from '../../../Services/Clients/clients-entity.service';
import { EmployeesEntityService } from '../../../Services/Employees/employees-entity.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.scss',
  standalone: false,
})
export class AddProjectComponent implements OnInit {
  projectForm = new FormGroup({
    clientProjectId: new FormControl(''),
    projectName: new FormControl(''),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(''),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
  });

  readonly data = inject<Project>(MAT_DIALOG_DATA);
  projectService = inject(ProjectsEntityService);
  clientService = inject(ClientsEntityService);
  employeeService = inject(EmployeesEntityService);
  dialogRef = inject(MatDialogRef<AddProjectComponent>);

  ngOnInit(): void {
    if (this.data !== null && this.data.id) {
      this.projectService.entities$
        .pipe(
          map((projects) =>
            projects.find((project) => project.id === this.data.id),
          ),
        )
        .subscribe((data) => {
          if (data !== undefined) {
            this.projectForm.patchValue({
              clientProjectId: data.clientProjectId,
              projectName: data.projectName,
              startDate: data.startDate,
              expectedEndDate: data.expectedEndDate,
              leadByEmpId: data.leadByEmpId,
              completedDate: data.completedDate,
              contactPerson: data.contactPerson,
              contactPersonContactNo: data.contactPersonContactNo,
              totalEmpWorking: data.totalEmpWorking,
              projectCost: data.projectCost,
              projectDetails: data.projectDetails,
              contactPersonEmailId: data.contactPersonEmailId,
            });
          }
        });
    }
  }

  onSubmit(): void {
    if (this.data !== null && this.data.id) {
      // Edit Project
      this.projectService
        .update({
          id: this.data.id,
          clientProjectId: this.projectForm.value.clientProjectId as string,
          projectName: this.projectForm.value.projectName as string,
          startDate: this.projectForm.value.startDate as string,
          expectedEndDate: this.projectForm.value.expectedEndDate as string,
          leadByEmpId: this.projectForm.value.leadByEmpId as string,
          completedDate: this.projectForm.value.completedDate as string,
          contactPerson: this.projectForm.value.contactPerson as string,
          contactPersonContactNo: this.projectForm.value
            .contactPersonContactNo as string,
          totalEmpWorking: this.projectForm.value.totalEmpWorking as string,
          projectCost: this.projectForm.value.projectCost as string,
          projectDetails: this.projectForm.value.projectDetails as string,
          contactPersonEmailId: this.projectForm.value
            .contactPersonEmailId as string,
        })
        .subscribe(() => {
          this.dialogRef.close(); // Close the dialog
        });
    } else {
      // Add Project
      this.projectService
        .add({
          clientProjectId: this.projectForm.value.clientProjectId as string,
          projectName: this.projectForm.value.projectName as string,
          startDate: this.projectForm.value.startDate as string,
          expectedEndDate: this.projectForm.value.expectedEndDate as string,
          leadByEmpId: this.projectForm.value.leadByEmpId as string,
          completedDate: this.projectForm.value.completedDate as string,
          contactPerson: this.projectForm.value.contactPerson as string,
          contactPersonContactNo: this.projectForm.value
            .contactPersonContactNo as string,
          totalEmpWorking: this.projectForm.value.totalEmpWorking as string,
          projectCost: this.projectForm.value.projectCost as string,
          projectDetails: this.projectForm.value.projectDetails as string,
          contactPersonEmailId: this.projectForm.value
            .contactPersonEmailId as string,
        })
        .subscribe(() => {
          this.dialogRef.close(); // Close the dialog
        });
    }
  }
}
