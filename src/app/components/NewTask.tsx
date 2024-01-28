'use client';

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { TaskDetails } from './TaskDetails';
import { TaskForm } from './TaskForm';
import { addNewTask } from '../api/firebase';

export const NewTask = ({
  isOpen,
  onClose,
  userList,
}: {
  isOpen: boolean;
  onClose: () => void;
  userList: User[];
}) => {
  const handleSubmitNewTask = (task: Task) => {
    addNewTask(task)
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
        Create New Task
      </DialogTitle>
      <DialogContent>
        <TaskForm userList={userList} handleFormSubmit={handleSubmitNewTask} />
      </DialogContent>
      <DialogActions sx={{ mx: 'auto', mt: 2, mb: 4 }}>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
