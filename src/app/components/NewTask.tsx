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

export const NewTask = ({
  isOpen,
  onClose,
  userList,
}: {
  isOpen: boolean;
  onClose: () => void;
  userList: User[];
}) => {

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
        <TaskForm userList={userList} />
      </DialogContent>
      <DialogActions sx={{ mx: 'auto', mt: 2, mb: 4 }}>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
