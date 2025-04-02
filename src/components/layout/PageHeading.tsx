import { Box, Typography } from '@mui/material';

interface HeadingProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export const PageHeading: React.FC<HeadingProps> = ({ title, actions }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
      <Typography variant='h5'>{title}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'end' }}>{actions}</Box>
    </Box>
  );
};
