import { Injectable } from '@angular/core';

export class EmployeeStatus {
  createdAt!: number | null;
  createdBy!: string | null;
  duration!: number | null;
  employeeStatusName!: string | null;
  employeeStatusType!: string | null;
  id!: string | null;
  isPKWTCompensation!: boolean | null;
  isProbation!: boolean | null;
  isUsed!: boolean | null;
  updatedAt!: number | null;
  updatedBy!: string | null;
}

const employeeStatus: EmployeeStatus[] = [
  {
    createdAt: 1724898289787,
    createdBy: null,
    duration: 12,
    employeeStatusName: 'Updated Status',
    employeeStatusType: 'PKWT',
    id: '01912b43-522e-72c2-bb6a-ddfd01d5817d',
    isPKWTCompensation: false,
    isProbation: null,
    isUsed: true,
    updatedAt: 1725438707926,
    updatedBy: null,
  },
  {
    createdAt: 1724898289787,
    createdBy: null,
    duration: 12,
    employeeStatusName: 'Updated Status',
    employeeStatusType: 'PKWT',
    id: '01912b43-522e-72c1-ad14-1d90d1ce9275',
    isPKWTCompensation: false,
    isProbation: null,
    isUsed: true,
    updatedAt: 1725438710671,
    updatedBy: null,
  },
  {
    createdAt: 1724898289787,
    createdBy: null,
    duration: 12,
    employeeStatusName: 'Updated Status',
    employeeStatusType: 'PKWT',
    id: '01912b43-522d-722d-83e9-73bfc778c740',
    isPKWTCompensation: false,
    isProbation: null,
    isUsed: true,
    updatedAt: 1725438725899,
    updatedBy: null,
  },
  {
    createdAt: 1738602000000,
    createdBy: null,
    duration: 4,
    employeeStatusName: 'New Status',
    employeeStatusType: 'PKWT',
    id: 'e225334d-bcad-4ec7-af44-80bd808dcd22',
    isPKWTCompensation: true,
    isProbation: true,
    isUsed: false,
    updatedAt: 1738602000000,
    updatedBy: null,
  },
  {
    createdAt: 1725504503733,
    createdBy: null,
    duration: 0,
    employeeStatusName: 'New Status',
    employeeStatusType: 'PKWT',
    id: 'd4037bf1-f17b-4060-aa99-c0476a326bd5',
    isPKWTCompensation: false,
    isProbation: null,
    isUsed: true,
    updatedAt: 1725504503733,
    updatedBy: null,
  },
  {
    createdAt: 1738602000000,
    createdBy: null,
    duration: 22,
    employeeStatusName: 'New Status',
    employeeStatusType: 'PKWTT',
    id: 'd648dee0-15c7-4097-87a4-464a043a2eff',
    isPKWTCompensation: true,
    isProbation: true,
    isUsed: false,
    updatedAt: 1738602000000,
    updatedBy: null,
  },
];

@Injectable()
export class EmployeeStatusService {
  getEmployeeStatus() {
    return employeeStatus;
  }
}
