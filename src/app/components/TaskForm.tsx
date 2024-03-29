'use client';

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';

export const TaskForm = ({
  taskData,
  userList,
  handleFormSubmit,
}: {
  taskData?: Task;
  userList: User[];
  handleFormSubmit: (task: Task) => void;
}) => {
  const defaultTaskFormValues = {
    id: taskData?.id ?? '',
    title: taskData?.title ?? '',
    description: taskData?.description ?? '',
    dueDate: taskData?.dueDate ?? '',
    assignee: {
      userId: taskData?.assignee.userId ?? '',
      displayName: taskData?.assignee.displayName ?? '',
    },
    priorityLevel: taskData?.priorityLevel ?? '',
    notes: taskData?.notes ?? '',
    status: taskData?.status ?? 'pending',
  };

  const [formData, setFormData] = useState<Task>(defaultTaskFormValues);

  const handleInputChange = (
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const { name, value } = event.target;
    if (name === 'assignee.userId') {
      setFormData((prevData) => ({
        ...prevData,
        assignee: {
          userId: value,
          displayName: getAssigneeName(userList, value),
        },
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleFormSubmit(formData);
  };

  const getAssigneeName = (userList: User[], id: string) => {
    const assignee = userList.find(
      (user) => user.userId === id || user.id === id
    );
    return assignee?.displayName ?? '';
  };

  return (
    <Box sx={{ maxWidth: '520px', width: '100%', mx: 'auto', py: 2 }}>
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
            name="description"
            label="Description"
            size="small"
            required
            onChange={handleInputChange}
            value={formData.description}
          />
          <TextField
            id="dueDate"
            name="dueDate"
            size="small"
            type="date"
            label="Due Date"
            InputLabelProps={{ shrink: true }}
            onChange={handleInputChange}
            value={formData.dueDate}
          />

          <FormControl size="small">
            <InputLabel id="assignee">Assignee</InputLabel>
            <Select
              labelId="assignee"
              label="Assignee"
              id="assignee"
              name="assignee.userId"
              defaultValue={''}
              onChange={handleInputChange}
              value={formData.assignee.userId}
            >
              {userList.map((user) => {
                const { id: userId, displayName } = user;
                return (
                  <MenuItem value={userId} key={userId}>
                    {displayName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl size="small">
            <InputLabel id="priorityLevel">Priority</InputLabel>
            <Select
              labelId="priorityLevel"
              label="Priority"
              id="priorityLevel"
              name="priorityLevel"
              onChange={handleInputChange}
              value={formData.priorityLevel}
              defaultValue={''}
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </FormControl>

          <TextField
            id="notes"
            name="notes"
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
              name="status"
              onChange={handleInputChange}
              value={formData.status}
              defaultValue={''}
            >
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="in progress">In Progress</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
              <MenuItem value="cancelled">Cancelled</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained" size="large">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
