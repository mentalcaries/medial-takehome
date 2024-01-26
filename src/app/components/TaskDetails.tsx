'use client';

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, Chip, Paper, capitalize } from '@mui/material';

// interface TaskData {
//   id: string;
//   title: string;
//   description: string;
//   dueDate: string;
//   assignee: {
//     userId: string;
//     displayName: string;
//   };
//   priorityLevel: string;
//   notes: string;
//   status: string;
// }

// const taskData: TaskData = {
//   id: '2e5b7b9d-3a9d-4f51-b72d-1e1be617c1e9',
//   title: 'Task 2',
//   description: 'Pellentesque habitant morbi tristique senectus et...',
//   dueDate: '2023-06-12',
//   assignee: {
//     userId: '2',
//     displayName: 'Jane Smith',
//   },
//   priorityLevel: 'medium',
//   notes: '',
//   status: 'in progress',
// };

const TaskDetails = ({ taskData }: { taskData: Task }) => {
  const [isOpen, setIsOpen] = useState(true);

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
  const handleClose = () => setIsOpen(false);

  const getPriorityBadgeColour = (priority: string)=> {
    if(priority === 'high') return '#ef5350'
    if(priority === 'medium') return '#ff9800'
    else return '#03a9f4'
  }

  return (
    <Modal open={isOpen} onClose={handleClose}>
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
        <Chip  sx={{ mt: 2, bgcolor:`${getPriorityBadgeColour(priorityLevel)}` }} label={`${capitalize(priorityLevel)} Priority`} />
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1">
            Title: {title}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Description: {description}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Due Date: {dueDate}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Assigned To: {displayName}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Priority: 
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Status: {capitalize(status)}
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
