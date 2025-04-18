import React from 'react';
import { Drawer, useTheme, useMediaQuery } from '@mui/material';

import SidebarMenu from './SidebarMenu';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const drawerWidth = 240;

export default function Sidebar({ open, onClose }: SidebarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'persistent'}
      anchor='left'
      open={open}
      onClose={onClose}
      sx={{
        width: drawerWidth
      }}
    >
      <SidebarMenu />
    </Drawer>
  );
}
