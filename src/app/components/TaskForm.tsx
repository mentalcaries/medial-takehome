'use client';

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';

type FormData = {
  title: string;
  description: string;
  dueDate: string;
  assignee: string;
  priorityLevel: string;
  notes: string;
  status: string;
};

const defaultTaskFormVales = {
  title: '',
  description: '',
  dueDate: '',
  assignee: '',
  priorityLevel: '',
  notes: '',
  status: '',
};

const TaskForm = () => {
  const [formData, setFormData] = useState<FormData>(defaultTaskFormVales);

  const handleInputChange = (
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <Box m="auto" maxWidth="360px">
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" component="h2" align="center" mb={4}>
          New Task
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              id="title"
              name="title"
              label="Title"
              size="small"
              required
              onChange={handleInputChange}
              value={formData.title}
            />
            <TextField
              id="description"
              name='description'
              label="Description"
              size="small"
              required
              onChange={handleInputChange}
              value={formData.description}
            />
            <TextField
              id="dueDate"
              name='dueDate'
              size="small"
              type="date"
              label="Due Date"
              InputLabelProps={{ shrink: true }}
              onChange={handleInputChange}
              value={formData.dueDate}
            />
            <TextField
              id="assignee"
              name='assignee'
              label="Assignee"
              size="small"
              onChange={handleInputChange}
              value={formData.assignee}
            />

            <FormControl size="small">
              <InputLabel id="priorityLevel">Priority</InputLabel>
              <Select
                labelId="priorityLevel"
                label="Priority"
                id="priorityLevel"
                name='priorityLevel'
                onChange={handleInputChange}
                value={formData.priorityLevel}
              >
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="high">High</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="notes"
              name='notes'
              label="Notes"
              multiline
              size="small"
              minRows={3}
              onChange={handleInputChange}
              value={formData.notes}
            />

            <FormControl size="small">
              <InputLabel id="status">Status</InputLabel>
              <Select
                labelId="status"
                label="Status"
                id="status"
                name='status'
                onChange={handleInputChange}
                value={formData.status}
              >
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="inProgress">In Progress</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
                <MenuItem value="cancelled">Cancelled</MenuItem>
              </Select>
            </FormControl>

            <Button type="submit" variant="contained" size="large">
              Submit
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default TaskForm;
