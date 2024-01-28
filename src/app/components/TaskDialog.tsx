'use client';

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
} from '@mui/material';
import { TaskDetails } from './TaskDetails';
import { TaskForm } from './TaskForm';
import { editTask } from '../api/firebase';
import { nlNL } from '@mui/x-data-grid';

export const TaskDialog = ({
  taskData,
  isOpen,
  onClose,
  userList,
}: {
  taskData: Task;
  isOpen: boolean;
  onClose: () => void;
  userList: User[];
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleEditTask = (task: Task) => {
    editTask(task)
      .then(() => console.log('success'))
      .catch((error) => console.error('Error:', error))
      .finally(() => {
        onClose();
      });
  };

  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth>
      <DialogTitle
        variant="h5"
        component="h2"
        textAlign="center"
        fontWeight="bold"
        sx={{ pt: 5, pb: 2 }}
      >
        Task Details
      </DialogTitle>
      <DialogContent>
        {isEditing ? (
          <TaskForm
            taskData={taskData}
            userList={userList}
            handleFormSubmit={handleEditTask}
          />
        ) : null}
        {isDeleting ? (
          <>
            <Typography align="center" color="red" variant="h6">
              {' '}
              Are you sure?
            </Typography>
            <Typography align="center" color="red">
              {' '}
              WARNING: This cannot be undone.
            </Typography>
            <Box
              sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 3 }}
            >
              <Button onClick={onClose} variant="outlined" color="error">
                Confirm
              </Button>
              <Button variant="outlined" onClick={() => setIsDeleting(false)}>
                No way
              </Button>
            </Box>
          </>
        ) : null}

        {!isEditing && !isDeleting ? <TaskDetails taskData={taskData} /> : null}
      </DialogContent>
      <DialogActions sx={{ mx: 'auto', mt: 2, mb: 4 }}>
        {isEditing ? (
          <Button onClick={() => setIsEditing(false)}>Cancel</Button>
        ) : null}

        {!isEditing && !isDeleting ? (
          <>
            <Button onClick={onClose}>Close</Button>
            <Button
              onClick={() => {
                setIsEditing(true);
                setIsDeleting(false);
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => setIsDeleting(true)}
            >
              Delete
            </Button>
          </>
        ) : null}
      </DialogActions>
    </Dialog>
  );
};
