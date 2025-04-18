import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#7367F0',
      light: '#9E95F5',
      dark: '#5549D1',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#FFC107',
      light: '#FFD54F',
      dark: '#FFA000',
      contrastText: '#2C2C2C'
    },
    success: {
      main: '#28C76F',
      contrastText: '#FFFFFF'
    },
    warning: {
      main: '#FF9F43',
      contrastText: '#FFFFFF'
    },
    error: {
      main: '#EA5455',
      contrastText: '#FFFFFF'
    },
    info: {
      main: '#00CFE8',
      contrastText: '#FFFFFF'
    },
    background: {
      default: '#F8F7FA',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#6E6B7B',
      secondary: '#B9B9C3',
      disabled: '#D7D7D7'
    },
    divider: '#EBE9F1'
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#6E6B7B',
          boxShadow: '0 4px 24px 0 rgba(34, 41, 47, 0.1)',
          borderBottom: '1px solid #EBE9F1'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 24px',
          letterSpacing: '0.4px'
        },
        contained: {
          boxShadow: '0 4px 18px -4px rgba(115, 103, 240, 0.4)',
          '&:hover': {
            boxShadow: '0 6px 22px -4px rgba(115, 103, 240, 0.4)'
          }
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          boxShadow: '0 4px 24px 0 rgba(34, 41, 47, 0.1)',
          border: '1px solid rgba(34, 41, 47, 0.05)'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '6px',
            '& fieldset': {
              borderColor: '#EBE9F1'
            },
            '&:hover fieldset': {
              borderColor: '#7367F0'
            },
            '&.Mui-focused fieldset': {
              borderWidth: '2px'
            }
          }
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'collapse'
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          border: '1px solid #EBE9F1',
          padding: '0.75rem'
        },
        head: {
          fontWeight: 600,
          backgroundColor: '#F8F7FA',
          color: '#5E5873',
          borderBottom: '2px solid #EBE9F1'
        },
        body: {
          backgroundColor: '#FFFFFF'
        }
      }
    }
  },
  typography: {
    fontFamily: [
      'Public Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.25
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    body1: {
      fontSize: '0.9375rem',
      lineHeight: 1.5
    },
    button: {
      fontSize: '0.9375rem',
      fontWeight: 500
    }
  },
  shape: {
    borderRadius: 6
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9E95F5',
      light: '#B9B2F8',
      dark: '#7367F0',
      contrastText: '#2C2C2C'
    },
    secondary: {
      main: '#FFD54F',
      light: '#FFE082',
      dark: '#FFCA28',
      contrastText: '#2C2C2C'
    },
    background: {
      default: '#2C2C2C',
      paper: '#3B3B3B'
    },
    text: {
      primary: '#CFCFCF',
      secondary: '#A8A8A8',
      disabled: '#757575'
    },
    divider: 'rgba(255, 255, 255, 0.12)'
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#3B3B3B',
          boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.2)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#3B3B3B',
          border: '1px solid rgba(255, 255, 255, 0.12)'
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'collapse'
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          padding: '0.75rem'
        },
        head: {
          backgroundColor: '#2C2C2C',
          fontWeight: 600,
          color: '#CFCFCF',
          borderBottom: '2px solid rgba(255, 255, 255, 0.12)'
        },
        body: {
          backgroundColor: '#3B3B3B'
        }
      }
    }
  },
  typography: {
    fontFamily: [
      'Public Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.25
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    body1: {
      fontSize: '0.9375rem',
      lineHeight: 1.5
    },
    button: {
      fontSize: '0.9375rem',
      fontWeight: 500
    }
  },
  shape: {
    borderRadius: 6
  }
});
