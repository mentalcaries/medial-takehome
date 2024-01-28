import { Typography, Box, Button } from '@mui/material';

type ConfirmDeleteProps = {
  setIsDeleting: (state: boolean) => void;
  taskId: string;
  handleDelete: (taskId: string) => void;
};

export const ConfirmDelete = ({
  setIsDeleting,
  taskId,
  handleDelete,
}: ConfirmDeleteProps) => {
  return (
    <>
      <Typography align="center" color="red" variant="h6">
        {' '}
        Are you sure?
      </Typography>
      <Typography align="center" color="red">
        {' '}
        WARNING: This cannot be undone.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 3 }}>
        <Button
          onClick={() => handleDelete(taskId)}
          variant="outlined"
          color="error"
        >
          Confirm
        </Button>
        <Button variant="outlined" onClick={() => setIsDeleting(false)}>
          No way
        </Button>
      </Box>
    </>
  );
};
