import { Box, Button, Typography } from '@mui/material';
import TaskForm from './components/TaskForm';
import { TaskList } from './components/TaskList';
import TaskDetails from './components/TaskDetails';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

export default function Home() {
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
        >
          <AddCircleOutlineRoundedIcon />
          New Task
        </Button>
      </Box>

      <TaskForm />
      {/* <TaskList /> */}
      <TaskDetails />
    </Box>
  );
}
