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
import { editTask } from '../api/firebase';

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
        ) : (
          <TaskDetails taskData={taskData} />
        )}
      </DialogContent>
      <DialogActions sx={{ mx: 'auto', mt: 2, mb: 4 }}>
        {isEditing ? (
          <Button onClick={() => setIsEditing(false)}>Cancel</Button>
        ) : (
          <>
            <Button onClick={onClose}>Close</Button>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};
