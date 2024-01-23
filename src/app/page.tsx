import { Box, Button, Typography } from '@mui/material';
import TaskForm from './components/TaskForm';
import { TaskList } from './components/TaskList';

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
        Hello, World!
      </Typography>
      {/* <TaskForm /> */}
      <TaskList />
    </Box>
  );
}
