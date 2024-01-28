'use client';

import { Box, Button, Typography } from '@mui/material';
import { TaskList } from './components/TaskList';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { useState } from 'react';

export default function Home() {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

  return (
    <Box mx="auto" padding={3}>
      <Box my={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '8px',
            bgcolor: '#3e2465',
          }}
          onClick={() => setIsNewTaskModalOpen(true)}
        >
          <AddCircleOutlineRoundedIcon />
          New Task
        </Button>
      </Box>

      {/* <TaskForm /> */}
      <TaskList />
    </Box>
  );
}
