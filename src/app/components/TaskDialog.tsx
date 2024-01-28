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
import { deleteTask, editTask } from '../api/firebase';
import { ConfirmDelete } from './ConfirmDelete';

type TaskDialogProps = {
  taskData: Task;
  isOpen: boolean;
  onClose: () => void;
  userList: User[];
  setSnackBarState: ({
    isOpen,
    message,
  }: {
    isOpen: boolean;
    message: string;
  }) => void;
};

export const TaskDialog = ({
  taskData,
  isOpen,
  onClose,
  userList,
  setSnackBarState,
}: TaskDialogProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const { id } = taskData;

  const handleEditTask = (task: Task) => {
    editTask(task)
      .then(() =>
        setSnackBarState({ isOpen: true, message: 'Task Updated Successfully' })
      )
      .catch((error) => console.error('Error:', error))
      .finally(() => {
        onClose();
      });
  };

  const handleDeleteTask = (taskId: string) => {
    deleteTask(taskId)
      .then(() => setSnackBarState({ isOpen: true, message: 'Task Deleted' }))
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
          <ConfirmDelete
            setIsDeleting={setIsDeleting}
            taskId={id as string}
            handleDelete={handleDeleteTask}
          />
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
