'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Box
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  AccountCircle
} from '@mui/icons-material';
import SearchBar from './SearchBar';

interface NavbarProps {
  sidebarOpen: boolean;
  onSidebarToggle: () => void;
  isDarkMode: boolean;
  onDarkModeToggle: () => void;
}

export default function Navbar({
  sidebarOpen,
  onSidebarToggle,
  isDarkMode,
  onDarkModeToggle
}: NavbarProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [notificationAnchor, setNotificationAnchor] =
    useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setNotificationAnchor(null);
  };

  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${sidebarOpen ? 240 : 0}px)` },
        ml: { sm: `${sidebarOpen ? 240 : 0}px` },
        transition: (theme) =>
          theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
          })
      }}
    >
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='open drawer'
          onClick={onSidebarToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <SearchBar />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex' }}>
          <IconButton size='large' color='inherit' onClick={onDarkModeToggle}>
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <IconButton
            size='large'
            color='inherit'
            onClick={handleNotificationMenu}
          >
            <Badge badgeContent={4} color='error'>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size='large'
            edge='end'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleMenu}
            color='inherit'
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              <AccountCircle />
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <Menu
        id='notification-menu'
        anchorEl={notificationAnchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(notificationAnchor)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>New message from John</MenuItem>
        <MenuItem onClick={handleClose}>System update available</MenuItem>
        <MenuItem onClick={handleClose}>You have 3 new tasks</MenuItem>
      </Menu>
    </AppBar>
  );
}
