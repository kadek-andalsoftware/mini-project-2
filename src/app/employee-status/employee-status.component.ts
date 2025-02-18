import { Component, OnInit } from '@angular/core';
import {
  EmployeeStatus,
  EmployeeStatusService,
} from './employee-status.service';

@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.component.html',
  styleUrl: './employee-status.component.css',
  providers: [EmployeeStatusService],
})
export class EmployeeStatusComponent {
  employeeStatus: EmployeeStatus[];

  constructor(service: EmployeeStatusService) {
    this.employeeStatus = service.getEmployeeStatus();
  }
}
