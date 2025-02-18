import { Component, OnInit } from '@angular/core';
import {
  EmployeeStatus,
  EmployeeStatusService,
} from './employee-status.service';

import notify from 'devextreme/ui/notify';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.component.html',
  styleUrls: ['./employee-status.component.css'],
  providers: [EmployeeStatusService],
})
export class EmployeeStatusComponent implements OnInit {
  employeeStatuses: EmployeeStatus[] = [];
  selectedStatus: EmployeeStatus = {} as EmployeeStatus;
  isEditing = false;
  formVisible = false;

  constructor(private employeeStatusService: EmployeeStatusService) {

  }

  ngOnInit() {
    this.loadEmployeeStatuses();
  }

  async loadEmployeeStatuses() {
    try {
      const data = await firstValueFrom(this.employeeStatusService.getEmployeeStatuses());
      this.employeeStatuses = data;
    } catch (err) {
      console.error('Error loading employee statuses:', err);
      notify('Error loading employee statuses', 'error', 3000);
    }
  }

  async onRowInserted(e: any) {
    try {
      await firstValueFrom(this.employeeStatusService.createEmployeeStatus(e.data));
      notify('Employee status created successfully', 'success', 3000);
      await this.loadEmployeeStatuses();
    } catch (err) {
      console.error('Error creating employee status:', err);
      notify('Error creating employee status', 'error', 3000);
    }
  }

  async onRowUpdated(e: any) {
    try {
      await firstValueFrom(this.employeeStatusService.updateEmployeeStatus(e.data));
      notify('Employee status updated successfully', 'success', 3000);
      await this.loadEmployeeStatuses();
    } catch (err) {
      console.error('Error updating employee status:', err);
      notify('Error updating employee status', 'error', 3000);
    }
  }

  async onRowRemoved(e: any) {
    const id = e.data.id;
    try {
      await firstValueFrom(this.employeeStatusService.deleteEmployeeStatus(id));
      notify('Employee status deleted successfully', 'success', 3000);
      await this.loadEmployeeStatuses();
    } catch (err) {
      console.error('Error deleting employee status:', err);
      notify('Error deleting employee status', 'error', 3000);
    }
  }
}
