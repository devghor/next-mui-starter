"use client";

import React from "react";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { NavigateNext as NavigateNextIcon } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import {
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Category as CategoryIcon,
} from "@mui/icons-material";

// Define custom labels and icons for different routes
const routeConfig: Record<string, { label: string; icon: React.ReactNode }> = {
  dashboard: { label: "Dashboard", icon: <DashboardIcon fontSize="small" /> },
  settings: { label: "Settings", icon: <SettingsIcon fontSize="small" /> },
  profile: { label: "Profile", icon: <PersonIcon fontSize="small" /> },
  categories: { label: "Categories", icon: <CategoryIcon fontSize="small" /> },
};

export default function Breadcrumb() {
  const pathname = usePathname();

  const getBreadcrumbs = () => {
    const paths = pathname.split("/").filter(Boolean);
    return paths.map((path, index) => {
      const href = "/" + paths.slice(0, index + 1).join("/");
      // Check if we have a custom label for this path
      const config = routeConfig[path];
      const label = config ? config.label : path.charAt(0).toUpperCase() + path.slice(1);
      const icon = config ? config.icon : null;
      return { href, label, icon };
    });
  };

  return (
    <Box sx={{ mb: 3, mt: 3 }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          "& .MuiBreadcrumbs-separator": {
            mx: 1,
          },
          "& .MuiLink-root": {
            color: "text.primary",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            "&:hover": {
              textDecoration: "underline",
            },
          },
        }}
      >
        <Link href="/" color="inherit" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <HomeIcon fontSize="small" />
          <Typography variant="body2">Home</Typography>
        </Link>
        {getBreadcrumbs().map((breadcrumb) => (
          <Link
            key={breadcrumb.href}
            href={breadcrumb.href}
            color="inherit"
          >
            {breadcrumb.icon}
            <Typography variant="body2">{breadcrumb.label}</Typography>
          </Link>
        ))}
      </Breadcrumbs>
    </Box>
  );
} 