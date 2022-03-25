import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 160,
    valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  {
    id: 1, firstName: 'Raquel', lastName: 'Murrilo', age: 35, city: 'San Francisco',
  },
  {
    id: 2, firstName: 'Sergio', lastName: 'Marquina', age: 40, city: 'Spain',
  },
  {
    id: 3, firstName: 'Monica', lastName: 'Gaztambide', age: 45, city: 'Madrid',
  },
  {
    id: 4, firstName: 'Alicia', lastName: 'Sierra', age: 26, city: 'Spain',
  },
  {
    id: 5, firstName: 'Alison', lastName: 'Parker', age: 46, city: 'United States',
  },
  {
    id: 6, firstName: 'Santiago', lastName: 'Lopez', age: 45, city: 'Madrid',
  },
//   {
//     id: 7, firstName: 'Ferrara', lastName: 'Clifford', age: 44, city: 'Texas',
//   },
//   {
//     id: 8, firstName: 'Rossini', lastName: 'Frances', age: 36, city: 'New Jersey',
//   },
//   {
//     id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, city: 'New Jersey',
//   },
];

export default function Day12() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
