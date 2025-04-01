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
  Group as GroupIcon,
} from '@mui/icons-material';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const drawerWidth = 240;
const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  margin: '4px 8px',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.Mui-selected': {
    backgroundColor: `${theme.palette.primary.main}20`,
    '&:hover': {
      backgroundColor: `${theme.palette.primary.main}30`,
    },
  },
}));

const NestedListItemButton = styled(ListItemButton)(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.Mui-selected': {
    backgroundColor: `${theme.palette.primary.main}20`,
  },
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
      path: '/',
    },
    {
      text: 'User Management',
      icon: <PeopleIcon />,
      subItems: [
        { text: 'Users', icon: <PersonIcon />, path: '/users' },
        { text: 'Groups', icon: <GroupIcon />, path: '/groups' },
      ],
    },
    {
      text: 'Settings',
      icon: <SettingsIcon />,
      path: '/settings',
    },
  ];

  const handleItemClick = (text: string) => {
    setExpandedItems(prev =>
      prev.includes(text)
        ? prev.filter(item => item !== text)
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
      variant={isMobile ? "temporary" : "persistent"}
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundImage: `linear-gradient(195deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
          color: theme.palette.primary.contrastText,
          borderRight: 'none',
          borderColor: theme.palette.divider,
        },
      }}
    >
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        borderBottom: `1px solid ${theme.palette.divider}`
      }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Image
              src="/dummy-logo.svg"
              alt="Dashboard Logo"
              width={40}
              height={40}
              priority
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <Typography variant="h6" noWrap sx={{ fontWeight: 600, color: 'inherit' }}>
              Admin Panel
            </Typography>
          </Box>
        </Toolbar>
      </Box>
      <List>
        {menuItems.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem disablePadding>
              <StyledListItemButton
                onClick={() => item.subItems ? handleItemClick(item.text) : handleNavigation(item.path)}
                selected={item.path === pathname}
              >
                <ListItemIcon sx={{ color: 'inherit', minWidth: '40px' }}>
                  {React.cloneElement(item.icon, { sx: { fontSize: '1.25rem' } })}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                />
                {item.subItems && (
                  expandedItems.includes(item.text) ? <ExpandLess /> : <ExpandMore />
                )}
              </StyledListItemButton>
            </ListItem>
            {item.subItems && (
              <Collapse in={expandedItems.includes(item.text)} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItem key={subItem.text} disablePadding>
                      <NestedListItemButton
                        onClick={() => handleNavigation(subItem.path)}
                        selected={subItem.path === pathname}
                      >
                        <ListItemIcon sx={{ color: 'inherit', minWidth: '40px' }}>
                          {React.cloneElement(subItem.icon, { sx: { fontSize: '1rem' } })}
                        </ListItemIcon>
                        <ListItemText
                          primary={subItem.text}
                        />
                      </NestedListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}
