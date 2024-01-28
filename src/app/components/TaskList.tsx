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
import { TaskDialog } from './TaskDialog';
import { format } from 'date-fns';
import { getTaskData, streamListItems } from '../api/firebase';
import { QuerySnapshot } from 'firebase/firestore';

const tableHeadings = [
  'Title',
  'Description',
  'Due Date',
  'Priority',
  'Assignee',
  'Status',
];

type TaskListProps = {
  userList: User[];
  setSnackBarState: ({
    isOpen,
    message,
  }: {
    isOpen: boolean;
    message: string;
  }) => void;
};

export const TaskList = ({ userList, setSnackBarState }: TaskListProps) => {
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeadings.map((heading, index) => (
              <TableCell key={index} sx={{ fontWeight: 'bold' }}>
                {heading}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((row) => {
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
                <TableCell>{format(dueDate, 'PP')}</TableCell>
                <TableCell>{capitalize(priorityLevel)}</TableCell>
                <TableCell>{displayName}</TableCell>
                <TableCell>{capitalize(status)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {currentTask ? (
        <TaskDialog
          taskData={currentTask}
          isOpen={isTaskDetailsOpen}
          onClose={handleModalClose}
          userList={userList}
          setSnackBarState={setSnackBarState}
        />
      ) : null}
    </TableContainer>
  );
};
