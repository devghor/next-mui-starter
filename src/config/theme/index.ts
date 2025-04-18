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
    }
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
    }
  }
});
