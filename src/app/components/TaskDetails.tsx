'use client';

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, Chip, Paper, capitalize } from '@mui/material';
import {
  Autorenew,
  CheckCircle,
  NotInterested,
  Pending,
} from '@mui/icons-material';

const TaskDetails = ({
  taskData,
  isOpen,
  onClose,
}: {
  taskData: Task;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const {
    title,
    description,
    dueDate,
    assignee: { displayName },
    priorityLevel,
    status,
    notes,
  } = taskData;

  // const handleOpen = () => setOpen(true);

  const getPriorityBadgeColour = (priority: string) => {
    if (priority === 'high') return '#ef5350';
    if (priority === 'medium') return '#ff9800';
    else return '#03a9f4';
  };

  const getStatusIcon = (status: string) => {
    if (status === 'pending') return <Pending />;
    if (status === 'in progress') return <Autorenew />;
    if (status === 'completed') return <CheckCircle />;
    if (status === 'cancelled') return <NotInterested />;
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Card
        sx={{
          px: 3,
          py: 8,
          position: 'absolute',
          width: '400',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          textAlign="center"
          fontWeight="bold"
        >
          Task Details
        </Typography>
        <Chip
          sx={{ mt: 2, bgcolor: `${getPriorityBadgeColour(priorityLevel)}` }}
          label={`${capitalize(priorityLevel)} Priority`}
        />
        <Box sx={{ mt: 3, px: 2 }}>
          <Typography variant="body1">
            <Typography component="span" fontWeight="bold">
              Title:{' '}
            </Typography>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            <Typography component="span" fontWeight="bold">
              Description:{' '}
            </Typography>
            {description}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            <Typography component="span" fontWeight="bold">
              Due Date:{' '}
            </Typography>
            {dueDate}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            <Typography component="span" fontWeight="bold">
              Assigned To:{' '}
            </Typography>
            {displayName}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, display:'flex', gap:'4px', alignItems:'center' }}>
            <Typography component="span" fontWeight="bold">
              Status: {' '}
            </Typography>{' '}
            {capitalize(status)} {getStatusIcon(status)}
          </Typography>
          {notes && (
            <Typography variant="body1" sx={{ mt: 2 }}>
              Notes: {notes}
            </Typography>
          )}
        </Box>
      </Card>
    </Modal>
  );
};

export default TaskDetails;
