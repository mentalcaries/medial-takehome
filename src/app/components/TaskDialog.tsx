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
import TaskForm from './TaskForm';

const TaskDialog = ({
  taskData,
  isOpen,
  onClose,
}: {
  taskData: Task;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);

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
        {isEditing ? <TaskForm taskData={taskData}/> : <TaskDetails taskData={taskData} />}
      </DialogContent>
      <DialogActions sx={{ mx: 'auto', mt: 2, mb: 4 }}>
        {isEditing ? (
          <Button onClick={()=> setIsEditing(false)}>Cancel</Button>
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

export default TaskDialog;
