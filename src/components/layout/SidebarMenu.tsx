'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Typography, useTheme, alpha, Box, Toolbar } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import PeopleIcon from '@mui/icons-material/People';
import SecurityIcon from '@mui/icons-material/Security';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const menuItems = [
  {
    label: 'Dashboard',
    path: '/',
    icon: <DashboardIcon />,
    exact: true
  },
  {
    label: 'User Access',
    icon: <SecurityIcon />,
    children: [
      {
        label: 'User Management',
        path: '/users',
        icon: <PeopleIcon />,
        description: 'Manage system users'
      },
      {
        label: 'Group Settings',
        path: '/groups',
        icon: <GroupIcon />,
        description: 'Configure access groups'
      }
    ]
  }
];

const SidebarMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Premium color palette with smooth transitions
  const colors = {
    background: theme.palette.mode === 'dark' ? '#181824' : '#F9FBFF',
    text: theme.palette.mode === 'dark' ? '#E3E8F4' : '#4A5568',
    activeBackground: alpha(
      theme.palette.primary.main,
      theme.palette.mode === 'dark' ? 0.24 : 0.12
    ),
    activeText: theme.palette.primary.main,
    hoverBackground: alpha(
      theme.palette.primary.main,
      theme.palette.mode === 'dark' ? 0.16 : 0.08
    ),
    divider: alpha(
      theme.palette.divider,
      theme.palette.mode === 'dark' ? 0.08 : 0.12
    ),
    icon: alpha(theme.palette.primary.main, 0.9),
    submenuBackground: theme.palette.mode === 'dark' ? '#141420' : '#F0F4F8',
    highlight: theme.palette.mode === 'dark' ? '#2D3748' : '#EDF2F7'
  };

  const isActive = (path: string, exact = false) => {
    return exact ? pathname === path : pathname.startsWith(path);
  };

  const isSubmenuActive = (children: { path: string }[]) => {
    return children.some((child) => isActive(child.path));
  };

  return (
    <Sidebar
      backgroundColor={colors.background}
      rootStyles={{
        ['.ps-sidebar-container']: {
          background: `${colors.background} !important`,
          boxShadow: `4px 0 24px ${alpha(
            theme.palette.primary.main,
            theme.palette.mode === 'dark' ? 0.1 : 0.05
          )}`,
          position: 'relative',
          zIndex: 10
        },
        ['.ps-submenu-content']: {
          backgroundColor: `${colors.submenuBackground} !important`,
          margin: '6px 0',
          borderRadius: '8px',
          boxShadow: `0 2px 8px ${alpha(theme.palette.common.black, 0.05)}`
        },
        ['.ps-menu-button']: {
          color: `${colors.text} !important`,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important'
        },
        ['.ps-menu-icon']: {
          color: `${colors.icon} !important`,
          transition: 'transform 0.2s ease !important'
        },
        ['.ps-menu-button:hover']: {
          transform: 'none !important'
        }
      }}
      style={{
        height: '100vh',
        width: '240px',
        borderRight: `1px solid ${colors.divider}`,
        transition: 'width 0.3s ease'
      }}
    >
      <Toolbar
        sx={{
          borderBottom: `1px solid ${colors.divider}`
        }}
      >
        <Typography
          variant='h6'
          sx={{
            color: colors.activeText,
            fontWeight: 700,
            letterSpacing: '0.3px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '1.1rem'
          }}
        >
          <Box
            sx={{
              background: `linear-gradient(135deg, ${alpha(
                theme.palette.primary.main,
                0.2
              )} 0%, ${alpha(theme.palette.primary.main, 0.4)} 100%)`,
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 2px 8px ${alpha(theme.palette.primary.main, 0.1)}`
            }}
          >
            <DashboardIcon fontSize='small' sx={{ color: colors.icon }} />
          </Box>
          Admin Console
        </Typography>
      </Toolbar>

      <Menu
        menuItemStyles={{
          button: ({ active, level }) => ({
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: level > 0 ? '10px 16px' : '12px 20px',
            borderRadius: '8px',
            fontWeight: active ? 600 : 500,
            fontSize: level > 0 ? '0.875rem' : '0.9375rem',
            margin: level > 0 ? '4px 12px' : '8px 12px',
            color: active ? colors.activeText : colors.text,
            backgroundColor: active ? colors.activeBackground : 'transparent',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
            '&:before': {
              content: '""',
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: '3px',
              backgroundColor: active ? colors.activeText : 'transparent',
              transition: 'all 0.3s ease'
            },
            '&:hover': {
              backgroundColor: colors.hoverBackground,
              color: colors.activeText,
              '&:before': {
                backgroundColor: colors.activeText
              }
            },
            '& .MuiSvgIcon-root': {
              fontSize: level > 0 ? '1.125rem' : '1.25rem',
              color: active ? colors.activeText : colors.icon
            }
          }),
          label: {
            fontSize: 'inherit !important',
            fontWeight: 'inherit !important',
            letterSpacing: '0.2px',
            transition: 'all 0.2s ease'
          },
          subMenuContent: {
            backgroundColor: `${colors.submenuBackground} !important`,
            padding: '8px 0'
          }
        }}
        renderExpandIcon={({ open }) =>
          open ? (
            <ExpandMoreIcon sx={{ fontSize: '1.1rem !important' }} />
          ) : (
            <ChevronRightIcon sx={{ fontSize: '1.1rem !important' }} />
          )
        }
      >
        {menuItems.map((item) =>
          item.children ? (
            <SubMenu
              key={item.label}
              label={
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    py: '2px'
                  }}
                >
                  {item.icon}
                  <Typography
                    variant='body1'
                    sx={{
                      fontWeight: isSubmenuActive(item.children) ? 600 : 500,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              }
              icon={null}
              defaultOpen={isSubmenuActive(item.children)}
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                margin: '4px 0',
                position: 'relative'
              }}
            >
              {item.children.map((child) => (
                <MenuItem
                  key={child.path}
                  icon={child.icon}
                  onClick={() => router.push(child.path)}
                  active={isActive(child.path)}
                  onMouseEnter={() => setHoveredItem(child.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant='body2'
                      sx={{
                        fontWeight: isActive(child.path) ? 600 : 500,
                        fontSize: '0.875rem'
                      }}
                    >
                      {child.label}
                    </Typography>
                    {child.description && (
                      <Typography
                        variant='caption'
                        sx={{
                          color: alpha(colors.text, 0.7),
                          fontSize: '0.75rem',
                          mt: '2px'
                        }}
                      >
                        {child.description}
                      </Typography>
                    )}
                  </Box>
                </MenuItem>
              ))}
            </SubMenu>
          ) : (
            <MenuItem
              key={item.path}
              icon={item.icon}
              onClick={() => router.push(item.path)}
              active={isActive(item.path, item.exact)}
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Typography
                variant='body1'
                sx={{
                  fontWeight: isActive(item.path, item.exact) ? 600 : 500,
                  fontSize: '0.9375rem'
                }}
              >
                {item.label}
              </Typography>
            </MenuItem>
          )
        )}
      </Menu>
    </Sidebar>
  );
};

export default SidebarMenu;
