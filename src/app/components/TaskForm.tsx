'use client';

import { Button, FormLabel, TextField, Typography } from '@mui/material';
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
    <>
      <Typography variant="h5" component="h2">
        New Task
      </Typography>
      <form>
        <TextField id="title" label="Title" size="small" required />
        <TextField id="description" label="Description" size="small" required />
        <TextField id="dueDate" size="small" type="date" />
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </form>
    </>
  );
};

export default TaskForm;
