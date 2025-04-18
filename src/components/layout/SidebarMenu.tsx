'use client';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Box, Typography, useTheme, alpha, Chip, Toolbar } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as UserIcon,
  Lock as RoleIcon,
  Assignment as PermissionIcon,
  ExpandMore,
  ChevronRight,
  Apps as AppsIcon
} from '@mui/icons-material';

const SidebarMenu = () => {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();

  const isActive = (path: string) => pathname === path;

  const hasActiveChild = (children: any[]): boolean => {
    return children.some((child) =>
      child.path
        ? isActive(child.path)
        : child.children
          ? hasActiveChild(child.children)
          : false
    );
  };

  const colors = {
    primary: theme.palette.primary.main,
    bg: theme.palette.background.default,
    activeBg:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.primary.main, 0.16) // Use primary color with opacity for dark
        : theme.palette.primary.main,
    activeText:
      theme.palette.mode === 'dark' ? theme.palette.primary.light : '#fff',
    icon:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.common.white, 0.7)
        : alpha(theme.palette.text.primary, 0.68),
    section:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.common.white, 0.5)
        : alpha(theme.palette.text.primary, 0.45),
    hoverBg:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.primary.main, 0.08)
        : alpha(theme.palette.primary.main, 0.08),
    border:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.common.white, 0.12)
        : alpha(theme.palette.divider, 0.08),
    badgeBg:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[800]
        : theme.palette.grey[100],
    badgeText:
      theme.palette.mode === 'dark'
        ? theme.palette.grey[100]
        : theme.palette.grey[800]
  };

  const menuItems = [
    {
      label: 'Dashboards',
      icon: <DashboardIcon sx={{ fontSize: '1.5rem' }} />,
      path: '/',
      badge: '5'
    },
    {
      type: 'section',
      label: 'APPS & PAGES'
    },
    {
      label: 'User Management',
      icon: <AppsIcon sx={{ fontSize: '1.5rem' }} />,
      type: 'submenu',
      children: [
        {
          label: 'Users',
          icon: <UserIcon sx={{ fontSize: '1.3rem' }} />,
          path: '/users'
        },
        {
          label: 'Roles',
          icon: <RoleIcon sx={{ fontSize: '1.3rem' }} />,
          path: '/roles'
        },
        {
          label: 'Permissions',
          icon: <PermissionIcon sx={{ fontSize: '1.3rem' }} />,
          path: '/permissions'
        }
      ]
    }
  ];

  const renderMenuItems = (items: any[]) => {
    return items.map((item, index) => {
      if (item.type === 'section') {
        return (
          <Typography
            key={index}
            variant='caption'
            sx={{
              px: 3,
              py: 1.5,
              display: 'block',
              color: colors.section,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.8px'
            }}
          >
            {item.label}
          </Typography>
        );
      }

      if (item.type === 'submenu') {
        return (
          <SubMenu
            key={index}
            label={item.label}
            icon={item.icon}
            defaultOpen={hasActiveChild(item.children)}
            renderExpandIcon={({ open }) =>
              open ? (
                <ExpandMore fontSize='small' />
              ) : (
                <ChevronRight fontSize='small' />
              )
            }
          >
            {renderMenuItems(item.children)}
          </SubMenu>
        );
      }

      return (
        <MenuItem
          key={index}
          icon={item.icon}
          active={isActive(item.path)}
          onClick={() => item.path && router.push(item.path)}
          suffix={
            item.badge && (
              <Chip
                label={item.badge}
                size='small'
                sx={{
                  backgroundColor: colors.badgeBg,
                  color: theme.palette.text.secondary,
                  fontSize: '0.75rem',
                  height: 20
                }}
              />
            )
          }
          style={{
            backgroundColor: isActive(item.path)
              ? colors.activeBg
              : 'transparent',
            color: isActive(item.path)
              ? colors.activeText
              : theme.palette.text.primary,
            margin: '2px 8px',
            borderRadius: '6px'
          }}
        >
          {item.label}
        </MenuItem>
      );
    });
  };

  return (
    <Sidebar
      backgroundColor={colors.bg}
      rootStyles={{
        ['.ps-sidebar-container']: {
          backgroundColor: `${colors.bg} !important`,
          borderRight: `1px solid ${colors.border}`,
          height: '100vh'
        }
      }}
      style={{ width: '240px' }}
    >
      {/* Header */}
      <Toolbar sx={{ px: 3, borderBottom: `1px solid ${colors.border}` }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            sx={{
              width: 30,
              height: 30,
              backgroundColor: colors.primary,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 800,
              fontSize: 18
            }}
          >
            AC
          </Box>
          <Typography variant='h6' fontWeight={700}>
            Admin Console
          </Typography>
        </Box>
      </Toolbar>

      <Menu
        menuItemStyles={{
          button: ({ level, active }) => ({
            padding: level === 0 ? '8px 16px' : '6px 16px',
            paddingLeft: level === 0 ? 16 : level === 1 ? 36 : 44,
            '&:hover': {
              backgroundColor: active ? colors.activeBg : colors.hoverBg
            },
            '& .MuiSvgIcon-root': {
              color: active ? colors.activeText : colors.icon,
              marginRight: 12
            }
          }),
          label: {
            fontSize: '0.9375rem',
            fontWeight: 500,
            lineHeight: 1.2
          },
          subMenuContent: {
            backgroundColor: colors.bg
          }
        }}
      >
        {renderMenuItems(menuItems)}
      </Menu>
    </Sidebar>
  );
};

export default SidebarMenu;
