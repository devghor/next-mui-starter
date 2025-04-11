import { createTheme, alpha } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb', // Trustworthy blue (banking standard)
      light: '#3b82f6',
      dark: '#1d4ed8',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#059669', // Growth green (financial)
      light: '#10b981',
      dark: '#047857',
      contrastText: '#ffffff'
    },
    success: {
      main: '#10b981', // Transaction success
      contrastText: '#ffffff'
    },
    warning: {
      main: '#f59e0b', // Amber for warnings
      contrastText: '#ffffff'
    },
    error: {
      main: '#dc2626', // Red for errors
      contrastText: '#ffffff'
    },
    info: {
      main: '#2563eb', // Same as primary for consistency
      contrastText: '#ffffff'
    },
    background: {
      default: '#f8fafc', // Cool gray background
      paper: '#ffffff' // Pure white cards
    },
    text: {
      primary: '#1e293b', // Navy for text
      secondary: '#64748b',
      disabled: '#94a3b8'
    },
    divider: '#e2e8f0'
  },
  components: {
    // App Bar - Banking Header
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#1e293b',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          borderBottom: '1px solid #e2e8f0'
        }
      }
    },

    // Tables - Financial Data
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'separate',
          borderSpacing: 0
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #e2e8f0',
          padding: '14px 16px',
          fontSize: '0.875rem',
          '&:first-of-type': {
            borderLeft: '1px solid #e2e8f0',
            paddingLeft: '24px'
          },
          '&:last-of-type': {
            borderRight: '1px solid #e2e8f0',
            paddingRight: '24px'
          }
        },
        head: {
          backgroundColor: '#f1f5f9',
          fontWeight: 600,
          color: '#1e293b',
          borderTop: '1px solid #e2e8f0'
        },
        body: {
          '&.credit': {
            color: '#059669',
            fontWeight: 500
          },
          '&.debit': {
            color: '#dc2626',
            fontWeight: 500
          }
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:last-child td': {
            borderBottom: '1px solid #e2e8f0'
          },
          '&:hover': {
            backgroundColor: '#f8fafc'
          }
        }
      }
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.03)'
        }
      }
    },

    // Buttons - Financial CTAs
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 500,
          letterSpacing: '0.025em',
          padding: '8px 16px'
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #059669 0%, #047857 100%)'
        }
      }
    },

    // Cards - Account Overview
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)',
          overflow: 'visible'
        }
      }
    },

    // Inputs - Transaction Forms
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            '& fieldset': {
              borderColor: '#cbd5e1'
            },
            '&:hover fieldset': {
              borderColor: '#94a3b8'
            }
          }
        }
      }
    }
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", Arial, sans-serif',
    h1: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#1e293b'
    },
    h2: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#1e293b'
    },
    body1: {
      fontSize: '0.875rem',
      color: '#64748b'
    },
    button: {
      fontWeight: 500
    }
  },
  shape: {
    borderRadius: 8
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#2563eb',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
      contrastText: '#ffffff'
    },
    background: {
      default: '#0f172a',
      paper: '#1e293b'
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
      disabled: '#64748b'
    },
    divider: '#334155'
  },
  components: {
    // Dark mode overrides
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e293b',
          color: '#f8fafc',
          borderBottom: '1px solid #334155'
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #334155',
          '&:first-of-type': {
            borderLeft: '1px solid #334155'
          },
          '&:last-of-type': {
            borderRight: '1px solid #334155'
          }
        },
        head: {
          backgroundColor: '#1e293b',
          color: '#f8fafc'
        },
        body: {
          '&.credit': {
            color: '#34d399'
          },
          '&.debit': {
            color: '#f87171'
          }
        }
      }
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          border: '1px solid #334155'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #334155'
        }
      }
    }
  }
  // Other dark theme configurations...
});
