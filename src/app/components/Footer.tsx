import { Box, Typography } from '@mui/material';
import React from 'react';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Box padding={3}>
        <Typography align="center">&copy; {year} Devin Jaggernauth</Typography>
      </Box>
    </footer>
  );
};
