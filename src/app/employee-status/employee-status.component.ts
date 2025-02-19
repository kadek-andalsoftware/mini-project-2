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
  selectedStatus: EmployeeStatus = new EmployeeStatus;
  isEditing = false;
  visible = false;
  formData: EmployeeStatus = {};
  isNewRecord = false;
  event: any;


  constructor(private employeeStatusService: EmployeeStatusService) {

  }

  ngOnInit() {
    this.loadEmployeeStatuses();
  }

  addRow = () => {
    this.showPopup(true, {});
  };

  hidePopup = () => { 
    this.visible = false;
  };

  showPopup = (isNewRecord: boolean, formData: any) => {
    this.formData = formData;
    this.isNewRecord = isNewRecord;
    this.visible = true;
  };

  onEditorPreparing (e: any) {
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
      this.selectedStatus = {...e.data};
    } catch (err) {
      console.error('Error updating employee status:', err);
      notify('Error updating employee status', 'error', 3000);
    }
  }

  async onClickUpdate() {
    console.log("Clicked!!!!");
    try {
      await firstValueFrom(this.employeeStatusService.updateEmployeeStatus(this.selectedStatus));
      notify('Employee status updated successfully', 'success', 3000);
      await this.loadEmployeeStatuses();
    } catch(err) {
      console.error('Error updating employee status:', err);
      notify('Error updating employee status', 'error', 3000);
    }
  }

  onUpdateChange(e: any, field: string) {
    switch (field) {
      case "employeeStatusName":
        this.selectedStatus.employeeStatusName = e.value;
        break;
      case "employeeStatusType":
        this.selectedStatus.employeeStatusType = e.value;
        break;
      case "duration":
        this.selectedStatus.duration = e.value;
        break;
      case "isPKWTCompensation":
        this.selectedStatus.isPKWTCompensation = e.value;
        break;
    }
  }

  async onRowRemoved(e: any) {
    const id = e.id;
    try {
      const result = await this.employeeStatusService.deleteEmployeeStatus(id).toPromise();
      if (result) {
        notify('Employee status deleted successfully', 'success', 3000);
        await this.loadEmployeeStatuses();  // Refresh data after deletion
      } else {
        notify('Failed to delete employee status', 'error', 3000);
        console.log("Err: ", );
      }
    } catch (err) {
      console.log(this.employeeStatusService.deleteEmployeeStatus(id).toPromise());
      console.error('Error deleting employee status:', err);
      notify('Error deleting employee status', 'error', 3000);
    }
  }

  onLog() {
    console.log('Clicked YAY');
  }
}
