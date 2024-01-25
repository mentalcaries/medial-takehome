'use client';

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, Paper } from '@mui/material';

interface TaskData {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  assignee: {
    userId: string;
    displayName: string;
  };
  priorityLevel: string;
  notes: string;
  status: string;
}

const taskData: TaskData = {
  id: '2e5b7b9d-3a9d-4f51-b72d-1e1be617c1e9',
  title: 'Task 2',
  description: 'Pellentesque habitant morbi tristique senectus et...',
  dueDate: '2023-06-12',
  assignee: {
    userId: '2',
    displayName: 'Jane Smith',
  },
  priorityLevel: 'medium',
  notes: '',
  status: 'in progress',
};

const TaskDetails = () => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose}>
      <Card
        sx={{
          px: 3,
          py: 8,
          position: 'absolute',
          width: '400',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Typography variant="h5" component="h2">
          Task Details
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Title: {taskData.title}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Description: {taskData.description}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Due Date: {taskData.dueDate}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Assigned To: {taskData.assignee.displayName}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Priority: {taskData.priorityLevel}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Status: {taskData.status}
          </Typography>
          {taskData.notes && (
            <Typography variant="body1" sx={{ mt: 2 }}>
              Notes: {taskData.notes}
            </Typography>
          )}
        </Box>
      </Card>
    </Modal>
  );
};

export default TaskDetails;
