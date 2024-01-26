'use client';

import { capitalize } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import TaskDetails from './TaskDialog';

const columns: GridColDef[] = [
  { field: 'title', headerName: 'Title', width: 120 },
  { field: 'description', headerName: 'Description', width: 180 },
  { field: 'dueDate', headerName: 'Due Date', width: 120 },
  {
    field: 'priorityLevel',
    headerName: 'Priority',
    width: 90,
    valueGetter: (params: GridValueGetterParams) =>
      capitalize(params.row.priorityLevel),
  },
  {
    field: 'assignee',
    headerName: 'Assignee',
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      params.row?.assignee?.displayName,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      capitalize(params.row.status),
  },
  { field: 'notes', headerName: 'Notes', width: 180 },
];

export const TaskDataGrid = () => {
  const [tableData, setTableData] = useState([]);
  const [currentTask, setCurrentTask] = useState({})

  useEffect(() => {
    fetch('./data/tasks.json')
      .then((response) => response.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        onRowClick={(params) => setCurrentTask(params.row)}
      />
    </div>
  );
};
