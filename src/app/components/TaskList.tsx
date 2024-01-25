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
  const [currentTask, setCurrentTask] = useState({});

  useEffect(() => {
    fetch('./data/tasks.json')
      .then((response) => response.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Due Date</TableCell>
            <TableCell align="right">Priority</TableCell>
            <TableCell align="right">Assignee</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => {
            return (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.dueDate}</TableCell>
                <TableCell align="right">{capitalize(row.priorityLevel)}</TableCell>
                <TableCell align="right">{row.assignee.displayName}</TableCell>
                <TableCell align="right">{capitalize(row.status)}</TableCell>
                <TableCell align="right">{row.notes}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
