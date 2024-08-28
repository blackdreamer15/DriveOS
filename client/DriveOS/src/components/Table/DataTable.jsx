// import React, { useState } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import Button from '@mui/material/Button';

// const columns = [
//   { field: "number", headerName: "PhnoneNumber", width: 250 },
//   { field: "serviceType", headerName: "Service Type", width: 150 },
//   { field: "status", headerName: "Status", width: 150 },
//   {
//     field: "providerName",
//     headerName: "Provider Name",
//     width: 200,
//     editable: true, // Make the cell editable
//   },
//   {
//     field: "serviceCharge",
//     headerName: "Service Charge",
//     width: 150,
//     editable: true, // Make the cell editable
//   },
//   {
//     field: "createdAt",
//     headerName: "Created At",
//     width: 200,
//   },
//   {
//     field: "actions",
//     headerName: "Actions",
//     width: 150,
//     renderCell: (params) => (
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={() => handleSubmit(params)}
//       >
//         Submit
//       </Button>
//     ),
//   },
// ];

// const DataTable = ({ rows }) => {
//   const [rowData, setRowData] = useState(rows);

//   const handleSubmit = (params) => {
//     const { id } = params.row;
//     const updatedRow = rowData.find((row) => row.id === id);
//     console.log('Updated Row Data:', updatedRow);
    
//     // Here you can make an API call to submit the updated data
//     // Example: 
//     axios.put(`/api/repair-requests/${id}`, updatedRow)
//   };

//   const handleEditCellChange = (params) => {
//     const { id, field, value } = params;
//     const updatedRows = rowData.map((row) => {
//       if (row.id === id) {
//         return { ...row, [field]: value };
//       }
//       return row;
//     });
//     setRowData(updatedRows);
//   };

//   const transformedRows = rowData.map((row) => ({
//     id: row._id,
//     serviceType: row.serviceType,
//     status: row.status,
//     providerName: row.providerName || 'N/A',
//     serviceCharge: row.serviceCharge || 'N/A',
//     createdAt: new Date(row.createdAt).toLocaleString(),
//   }));

//   return (
//     <div className="bg-[#f5ffff] p-5 space-y-3">
//       <div className="space-y-2">
//         <h2 className="text-slate-700 font-semibold text-lg">DataTable</h2>
//         <h3 className="text-sm font-semibold text-gray-400">Requests</h3>
//       </div>
//       <DataGrid
//         rows={transformedRows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//         onEditCellChangeCommitted={handleEditCellChange}
//       />
//     </div>
//   );
// };

// export default DataTable;


import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({ rows }) => {
  const columns = [
    { field: '_id', headerName: 'ID', width: 150 },
    { field: 'userId', headerName: 'User ID', width: 150 },
    { field: 'serviceType', headerName: 'Service Type', width: 200 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'createdAt', headerName: 'Created At', width: 200 },
    { field: 'updatedAt', headerName: 'Updated At', width: 200 }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} getRowId={(row) => row._id} />
    </div>
  );
};

export default DataTable;
