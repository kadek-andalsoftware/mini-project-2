import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface EmployeeStatus {
  id?: string;
  employeeStatusName: string;
  employeeStatusType: string;
  duration: number;
  isPKWTCompensation: boolean;
  isProbation?: boolean;
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
  isUsed?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeStatusService {
  constructor(private apollo: Apollo) {}

  getEmployeeStatuses(): Observable<EmployeeStatus[]> {
    const GET_EMPLOYEE_STATUSES = gql`
      query {
        employeeStatuses {
          createdAt
          createdBy
          duration
          employeeStatusName
          employeeStatusType
          id
          isPKWTCompensation
          isProbation
          isUsed
          updatedAt
          updatedBy
        }
      }
    `;
    return this.apollo.watchQuery<{ employeeStatuses: EmployeeStatus[] }>({
      query: GET_EMPLOYEE_STATUSES,
      fetchPolicy: 'network-only'
    })
    .valueChanges.pipe(map(result => result.data.employeeStatuses));
  }

  createEmployeeStatus(status: EmployeeStatus): Observable<any> {
    const CREATE_EMPLOYEE_STATUS = gql`
      mutation ($employeeStatus: [EmployeeStatusInput!]!) {
        createEmployeeStatuses(employeeStatus: $employeeStatus)
      }
    `;
    return this.apollo.mutate({
      mutation: CREATE_EMPLOYEE_STATUS,
      variables: {
        employeeStatus: [status]
      }
    });
  }

  updateEmployeeStatus(status: EmployeeStatus): Observable<any> {
    const UPDATE_EMPLOYEE_STATUS = gql`
      mutation ($employeeStatus: EmployeeStatusInput!) {
        updateEmployeeStatus(employeeStatus: $employeeStatus)
      }
    `;
    return this.apollo.mutate({
      mutation: UPDATE_EMPLOYEE_STATUS,
      variables: { employeeStatus: status }
    });
  }

  deleteEmployeeStatus(id: string): Observable<any> {
    const DELETE_EMPLOYEE_STATUS = gql`
      mutation {
        deleteEmployeeStatus(id: "${id}")
      }
    `;
    return this.apollo.mutate({
      mutation: DELETE_EMPLOYEE_STATUS
    });
  }
}