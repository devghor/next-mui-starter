import { Box } from '@mui/material';
import React from 'react';

export default function PageContainer({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        mx: 'auto'
      }}
    >
      {children}
    </Box>
  );
}
