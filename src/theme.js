import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B6B',
      light: '#FF8E8E',
      dark: '#E64A4A',
    },
    secondary: {
      main: '#4ECDC4',
      light: '#7EDDD6',
      dark: '#3BADA5',
    },
    background: {
      default: '#FFF9F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2D3436',
      secondary: '#636E72',
    },
  },
  typography: {
    fontFamily: '"Nunito", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Fredoka", sans-serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: '"Fredoka", sans-serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Fredoka", sans-serif',
      fontWeight: 500,
    },
    h4: {
      fontFamily: '"Fredoka", sans-serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Fredoka", sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Fredoka", sans-serif',
      fontWeight: 500,
    },
    button: {
      fontFamily: '"Fredoka", sans-serif',
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          padding: '10px 24px',
          fontSize: '1rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        },
      },
    },
  },
});

export default theme;
