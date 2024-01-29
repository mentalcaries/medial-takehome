'use client';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { getTaskData, streamListItems } from '../api/firebase';
import { QuerySnapshot } from 'firebase/firestore';
import { capitalize } from '@mui/material';
import { TaskDialog } from './TaskDialog';
import { format } from 'date-fns';

const columns: GridColDef[] = [
  { field: 'title', headerName: 'Title', width: 120 },
  { field: 'description', headerName: 'Description', width: 180 },
  {
    field: 'dueDate',
    headerName: 'Due Date',
    width: 120,
    valueGetter: (params: GridValueGetterParams) =>
      format(params.row.dueDate, 'PP'),
  },
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

export const TaskList = ({ userList }: { userList: User[] }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [isTaskDetailsOpen, setIsTaskDetailsOpen] = useState(false);

  useEffect(() => {
    return streamListItems('tasks', (snapshot: QuerySnapshot) => {
      const nextData = getTaskData(snapshot);
      setTasks(nextData as Task[]);
    });
  }, []);

  const handleTaskSelect = (row: Task) => {
    setCurrentTask(row);
    setIsTaskDetailsOpen(true);
  };

  const handleModalClose = () => {
    setCurrentTask(null);
    setIsTaskDetailsOpen(false);
  };

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={tasks}
        columns={columns}
        initialState={{
          sorting: {
            sortModel: [{ field: 'title', sort: 'asc' }],
          },
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 8, 10]}
        onRowClick={(params) => handleTaskSelect(params.row)}
        sx={{ cursor: 'pointer' }}
      />
      {currentTask ? (
        <TaskDialog
          taskData={currentTask}
          isOpen={isTaskDetailsOpen}
          onClose={handleModalClose}
          userList={userList}
        />
      ) : null}
    </div>
  );
};
