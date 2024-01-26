'use client';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { capitalize } from '@mui/material';
import { useEffect, useState } from 'react';
import TaskDetails from './TaskDetails';

export const TaskList = () => {
  const [tableData, setTableData] = useState<Task[]>([]);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [isTaskDetailsOpen, setIsTaskDetailsOpen] = useState(false);

  useEffect(() => {
    fetch('./data/tasks.json')
      .then((response) => response.json())
      .then((data) => setTableData(data));
  }, []);

  const handleTaskSelect = (row: Task) => {
    setCurrentTask(row);
    setIsTaskDetailsOpen(true);
  };

  const handleModalClose = () => {
    setCurrentTask(null);
    setIsTaskDetailsOpen(false)
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Assignee</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => {
            const {
              id,
              title,
              description,
              dueDate,
              priorityLevel,
              assignee: { displayName },
              status,
            } = row;
            return (
              <TableRow
                hover
                key={id}
                onClick={() => handleTaskSelect(row)}
                sx={{ cursor: 'pointer' }}
              >
                <TableCell component="th" scope="row">
                  {title}
                </TableCell>
                <TableCell>{description}</TableCell>
                <TableCell>{dueDate}</TableCell>
                <TableCell>{capitalize(priorityLevel)}</TableCell>
                <TableCell>{displayName}</TableCell>
                <TableCell>{capitalize(status)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {currentTask ? <TaskDetails taskData={currentTask} isOpen={isTaskDetailsOpen} onClose={handleModalClose}/> : null}
    </TableContainer>
  );
};
