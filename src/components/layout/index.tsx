"use client";

import React, { useState } from "react";
import {
  Box,
  Toolbar,
  useTheme,
  ThemeProvider,
  CssBaseline,
  useMediaQuery,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { NavigateNext as NavigateNextIcon } from "@mui/icons-material";
import { lightTheme, darkTheme } from "@/config/theme";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const pathname = usePathname();

  const getBreadcrumbs = () => {
    const paths = pathname.split("/").filter(Boolean);
    return paths.map((path, index) => {
      const href = "/" + paths.slice(0, index + 1).join("/");
      const label = path.charAt(0).toUpperCase() + path.slice(1);
      return { href, label };
    });
  };

  const showBreadcrumb = pathname !== "/";

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { sm: `calc(100% - ${sidebarOpen ? 240 : 0}px)` },
            ml: { sm: `${sidebarOpen ? 0 : -240}px` },
            transition: (theme) =>
              theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
          }}
        >
          <Navbar
            sidebarOpen={sidebarOpen}
            onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
            isDarkMode={isDarkMode}
            onDarkModeToggle={() => setIsDarkMode(!isDarkMode)}
          />
          <Toolbar />
          <Box sx={{ px: 3 }}>
            {showBreadcrumb && (
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
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    },
                  }}
                >
                  <Link href="/" color="inherit">
                    Home
                  </Link>
                  {getBreadcrumbs().map((breadcrumb) => (
                    <Link
                      key={breadcrumb.href}
                      href={breadcrumb.href}
                      color="inherit"
                    >
                      {breadcrumb.label}
                    </Link>
                  ))}
                </Breadcrumbs>
              </Box>
            )}
            <Box>
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
