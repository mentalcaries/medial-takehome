'use client';

import { Box, Button, Snackbar } from '@mui/material';
import { TaskList } from './components/TaskList';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { useEffect, useState } from 'react';
import { getAllItems } from './api/firebase';
import { NewTask } from './components/NewTask';

const defaultSnackBarState = {
  isOpen: false,
  message: '',
};

export default function Home() {
  const [userList, setUserList] = useState<User[]>([]);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [snackBarState, setSnackBarState] = useState(defaultSnackBarState);

  useEffect(() => {
    getAllItems('users')
      .then((data) => setUserList(data as User[]))
      .catch((error: Error) => {
        console.error('Something went wrong', error);
      });
  }, []);

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
            ':hover': {
              bgcolor: '#3e2465',
              opacity: '0.8',
              transition: '0.2s',
            },
          }}
          onClick={() => setIsNewTaskModalOpen(true)}
        >
          <AddCircleOutlineRoundedIcon />
          New Task
        </Button>
      </Box>
      <TaskList userList={userList} setSnackBarState={setSnackBarState} />
      <NewTask
        isOpen={isNewTaskModalOpen}
        userList={userList}
        onClose={() => setIsNewTaskModalOpen(false)}
        setSnackBarState={setSnackBarState}
      />
      <Snackbar
        open={snackBarState.isOpen}
        message={snackBarState.message}
        autoHideDuration={2000}
        onClose={() => setSnackBarState(defaultSnackBarState)}
      />
    </Box>
  );
}
