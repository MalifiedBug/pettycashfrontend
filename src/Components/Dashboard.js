import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Chart from './Chart';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'date',
    headerName: 'Date',
    width: 150,
    editable: true,
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'manager',
    headerName: 'Approved By',
    width: 150,
    editable: true,
  },
  {
    field: 'amount',
    headerName: 'Amount Rs.',
    width: 110,
    editable: true,
  },
  {
    field: 'details',
    headerName: 'Summary',
    type: 'number',
    width: 110,
    editable: true,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.date || ''} ${params.row.firstName || ''}`,
  // },
];

const rows = [
  { id: 1, firstName: 'Snow', date: '2022-11-17', amount: 35, manager:"karan", details:'spend details' },
  { id: 2, firstName: 'Lannister', date: '2022-11-17', amount: 42, manager:"tharun", details:'spend details' },
  { id: 3, firstName: 'Lannister', date: '2022-11-17', amount: 45 , manager:"karan", details:'spend details'},
  { id: 4, firstName: 'Stark', date: '2022-11-17', amount: 16 , manager:"kholi", details:'spend details'},
  { id: 5, firstName: 'Targaryen', date: '2022-11-17', amount: null, manager:"shruthi" , details:'spend details'},
  { id: 6, firstName: 'Melisandre', date: '2022-11-17', amount: 150, manager:"shruthi" , details:'spend details'},
  { id: 7, firstName: 'Clifford', date: '2022-11-17', amount: 44, manager:"kholi" , details:'spend details'},
  { id: 8, firstName: 'Frances', date: '2022-11-17', amount: 36, manager:"tharun" , details:'spend details'},
  { id: 9, firstName: 'Roxie', date: '2022-11-17', amount: 65 , manager:"karan", details:'spend details'},
];

export default function Dashboard() {
  return (
    <div>

<div style={{width:'100%', height: "3rem", backgroundColor: "blueviolet", display:"flex", flexDirection:"row", justifyContent:"center",alignItems:"center"}}>
          <strong>Dashboard</strong>
        </div>
      
      <h1> Spend History:
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pamountSize={5}
            rowsPerPamountOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
        <Chart />
      </h1>
    </div>
  );
}
