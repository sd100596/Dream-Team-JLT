import { createTheme, alpha } from '@mui/material/styles';

const getPalette = (mode) => ({
  mode,
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
    default: mode === 'light' ? '#FFF9F5' : '#0F141A',
    paper: mode === 'light' ? '#FFFFFF' : '#161C23',
  },
  text: {
    primary: mode === 'light' ? '#2D3436' : '#F4F7F9',
    secondary: mode === 'light' ? '#636E72' : '#B5C0C8',
  },
  divider: mode === 'light' ? 'rgba(45,52,54,0.12)' : 'rgba(244,247,249,0.12)',
});

const createAppTheme = (mode = 'light') =>
  createTheme({
    palette: getPalette(mode),
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
      MuiCssBaseline: {
        styleOverrides: {
          ':root': {
            colorScheme: mode,
          },
          body: {
            backgroundColor: mode === 'light' ? '#FFF9F5' : '#0F141A',
          },
        },
      },
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
          root: ({ theme }) => ({
            borderRadius: 20,
            backgroundImage: 'none',
            boxShadow:
              theme.palette.mode === 'light'
                ? '0 8px 24px rgba(0,0,0,0.08)'
                : `0 10px 30px ${alpha(theme.palette.common.black, 0.5)}`,
          }),
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });

export default createAppTheme;
