import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Box,
  Collapse,
  Typography,
  useTheme,
  useMediaQuery,
  styled,
  Toolbar
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
  ExpandLess,
  ExpandMore,
  Person as PersonIcon,
  Group as GroupIcon
} from '@mui/icons-material';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import SidebarMenu from './SidebarMenu';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const drawerWidth = 240;
const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  margin: '4px 8px',
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  },
  '&.Mui-selected': {
    backgroundColor: `${theme.palette.primary.main}20`,
    '&:hover': {
      backgroundColor: `${theme.palette.primary.main}30`
    }
  }
}));

const NestedListItemButton = styled(ListItemButton)(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  },
  '&.Mui-selected': {
    backgroundColor: `${theme.palette.primary.main}20`
  }
}));

export default function Sidebar({ open, onClose }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const menuItems = [
    {
      text: 'Dashboard',
      icon: <DashboardIcon />,
      path: '/'
    },
    {
      text: 'User Management',
      icon: <PeopleIcon />,
      subItems: [
        { text: 'Users', icon: <PersonIcon />, path: '/users' },
        { text: 'Groups', icon: <GroupIcon />, path: '/groups' }
      ]
    },
    {
      text: 'Settings',
      icon: <SettingsIcon />,
      path: '/settings'
    }
  ];

  const handleItemClick = (text: string) => {
    setExpandedItems((prev) =>
      prev.includes(text)
        ? prev.filter((item) => item !== text)
        : [...prev, text]
    );
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    if (isMobile) {
      onClose();
    }
  };

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
