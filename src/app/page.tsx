'use client';

import { Box, Button, Typography } from '@mui/material';
import TaskForm from './components/TaskForm';
import { TaskList } from './components/TaskList';
import TaskDetails from './components/TaskDialog';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { useState } from 'react';
import { getTasks } from './api/firebase';

export default  function Home() {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

getTasks().then(data => console.log(data))
  return (
    <Box mx="auto" padding={3}>
      <Typography
        variant="h4"
        mb={4}
        textAlign="center"
        component="h1"
        fontWeight=""
      >
        Medial Tasks
      </Typography>
      <Box my={4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          size="large"
          sx={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}
          onClick={()=> setIsNewTaskModalOpen(true)}
        >
          <AddCircleOutlineRoundedIcon />
          New Task
        </Button>
      </Box>

      {/* <TaskForm /> */}
      <TaskList />
      {/* <TaskDetails /> */}
    </Box>
  );
}
