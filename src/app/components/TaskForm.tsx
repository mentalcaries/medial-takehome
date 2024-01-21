'use client';

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';

type FormData = {
  title: string;
  description: string;
  dueDate: string;
  assignee: string;
  priorityLevel: string;
  notes: string;
  status: string;
};

const priorityLevels = ['Low', 'Medium', 'High'];
const statusOptions = ['Pending', 'In Progress', 'Completed'];

const TaskForm = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    dueDate: '',
    assignee: '',
    priorityLevel: '',
    notes: '',
    status: '',
  });

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <Box m="auto" maxWidth="320px">
      <Typography variant="h5" component="h2" align="center" mb={4}>
        New Task
      </Typography>
      <form>
        <Stack spacing={3}>
          <TextField id="title" label="Title" size="small" required />
          <TextField
            id="description"
            label="Description"
            size="small"
            required
          />
          <TextField
            id="dueDate"
            size="small"
            type="date"
            label="Due Date"
            InputLabelProps={{ shrink: true }}
          />
          <TextField id="assignee" label="Assignee" size="small" />

          <FormControl size="small">
            <InputLabel id="priority">Priority</InputLabel>
            <Select
              labelId="priority"
              label="Priority"
              id="priority"
              onChange={() => {}}
              // value
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </FormControl>

          <TextField
            id="notes"
            label="Notes"
            multiline
            size="small"
            minRows={3}
          />

          <FormControl size="small">
            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="status"
              label="Status"
              id="status"
              onChange={() => {}}
              // value
            >
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="inProgress">In Progress</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
              <MenuItem value="cancelled">Cancelled</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default TaskForm;
