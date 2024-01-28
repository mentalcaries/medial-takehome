import { Box, Typography } from '@mui/material';
import React from 'react';

export const Header = () => {
  return (
    <header>
      <Box sx={{ bgcolor: '#3e2465', width: '100%', py: 1, borderRadius: 2 }}>
        <Typography
          variant="h4"
          mb={4}
          textAlign="center"
          component="h1"
          color="white"
          fontWeight="normal"
          paddingTop={2}
        >
          Medial Tasks
        </Typography>
      </Box>
    </header>
  );
};
