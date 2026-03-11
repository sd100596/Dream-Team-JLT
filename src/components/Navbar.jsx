import { AppBar, Toolbar, Typography, Button, Box, IconButton, Tooltip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function Navbar({ mode, onToggleMode }) {
  const isDark = mode === 'dark';

  return (
    <AppBar 
      position="sticky" 
      sx={(theme) => ({ 
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow:
          theme.palette.mode === 'light'
            ? '0 2px 12px rgba(0,0,0,0.06)'
            : '0 2px 12px rgba(0,0,0,0.35)',
      })}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            component="img"
            src="/logo.png"
            alt="Dream Team JLT Logo"
            sx={{ height: 40 }}
          />
          <Typography 
            variant="h6" 
            component={RouterLink} 
            to="/"
            sx={{ 
              textDecoration: 'none', 
              color: 'text.primary',
              fontFamily: '"Fredoka", sans-serif',
              fontWeight: 600,
              fontSize: '1.4rem'
            }}
          >
            Dream Team JLT
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button 
            component={RouterLink} 
            to="/"
            sx={{ color: 'text.secondary' }}
          >
            Home
          </Button>
          <Button 
            component={RouterLink} 
            to="/cats"
            variant="contained"
            color="primary"
            sx={{ 
              '&:hover': { 
                bgcolor: 'primary.dark',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(255,107,107,0.4)'
              },
              transition: 'all 0.2s ease'
            }}
          >
            See Cats
          </Button>
          <Tooltip title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
            <IconButton 
              onClick={onToggleMode} 
              color="inherit" 
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              sx={{ ml: 0.5 }}
            >
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
