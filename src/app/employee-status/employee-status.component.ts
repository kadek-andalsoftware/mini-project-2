import { Component, OnInit} from '@angular/core';
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
  selectedStatus: EmployeeStatus = {};
  visible = false;
  isNewRecord = false;
  event: any;

  constructor(private employeeStatusService: EmployeeStatusService) {}

  async ngOnInit() {
    await this.loadEmployeeStatuses();
  }

  addRow = () => {
    this.showPopup(true, {});
  } 

  editRow = (e: any) => {
    const id = e.id;
    const employeeStatus = this.employeeStatuses.find(status => status.id === id);
    this.showPopup(false, employeeStatus);
  }

  hidePopup = () => { 
    this.visible = false;
  };

  showPopup = (isNewRecord: boolean, data: any) => {
    this.selectedStatus = isNewRecord ? new EmployeeStatus() : { ...data };
    this.isNewRecord = isNewRecord;
    this.visible = true;
    console.log("Selected Status: ", this.selectedStatus);
    console.log("Visible: ", this.visible);
  };

  onEditorPreparing (e: any) {
    console.log("Yay I'm in use!");
    e.editorOptions.onValueChanged = (event: any) => {
      switch (e.dataField) {
        case "employeeStatusName":
          this.selectedStatus.employeeStatusName = event.value;
          e.setValue(this.selectedStatus.employeeStatusName);
          console.log(this.selectedStatus);
          break;
        case "employeeStatusType":
          this.selectedStatus.employeeStatusType = event.value;
          e.setValue(this.selectedStatus.employeeStatusType);
          console.log(this.selectedStatus);
          break;
        case "duration":
          this.selectedStatus.duration = event.value;
          e.setValue(this.selectedStatus.duration);
          console.log(this.selectedStatus);
          break;
        case "isPKWTCompensation":
          this.selectedStatus.isPKWTCompensation = event.value;
          e.setValue(this.selectedStatus.isPKWTCompensation);
          console.log(this.selectedStatus);
          break;
      }
    }
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

  async onRowInserted() {
    console.log(this.selectedStatus);
    try {
      await firstValueFrom(this.employeeStatusService.createEmployeeStatus(this.selectedStatus));
      notify('Employee status created successfully', 'success', 3000);
      await this.loadEmployeeStatuses();
    } catch (err) {
      console.error('Error creating employee status:', err);
      notify('Error creating employee status', 'error', 3000);
    }
  }

  async onRowUpdated() {
    console.log(this.selectedStatus);
    try {
      const result = await firstValueFrom(this.employeeStatusService.updateEmployeeStatus(
        this.selectedStatus
      ));
      if(result) {
        notify('Employee status successfully updated!', 'success', 3000);
        await this.loadEmployeeStatuses();
      } else {
        notify('Failed to update employee status', 'error', 3000);
      }
    } catch (err) {
      console.error('Error updating employee status:', err);
      notify('Error updating employee status', 'error', 3000);
    }
  }

  async onRowRemoved(e: any) {
    try {
      const id = e.id;
      const result = await firstValueFrom(this.employeeStatusService.deleteEmployeeStatus(id));
      if (result) {
        notify('Employee status deleted successfully', 'success', 3000);
        await this.loadEmployeeStatuses(); 
      } else {
        notify('Failed to delete employee status', 'error', 3000);
      }
    } catch (err) {
      console.error('Error deleting employee status:', err);
      notify('Error deleting employee status', 'error', 3000);
    }
  }
}
