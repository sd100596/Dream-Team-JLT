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
      <Toolbar sx={{ justifyContent: 'space-between', py: { xs: 0.5 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            component={RouterLink}
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            sx={{ height: { xs: 28, sm: 36, md: 40 }, cursor: 'pointer' }}
          >
            <img src="/logo.png" alt="Dream Team JLT Logo" style={{ height: '100%', width: 'auto' }} />
          </Box>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.primary',
              fontFamily: '"Fredoka", sans-serif',
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.15rem', md: '1.4rem' },
              display: { xs: 'none', md: 'block' }
            }}
          >
            Dream Team JLT
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 }, alignItems: 'center' }}>
          <Button 
            component={RouterLink} 
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            sx={{ 
              color: 'text.secondary',
              fontSize: { xs: '0.8rem', sm: '0.875rem' },
              minWidth: { xs: 'auto' }
            }}
          >
            Home
          </Button>
          <Button 
            component={RouterLink} 
            to="/cats"
            variant="contained"
            color="primary"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            sx={{ 
              fontSize: { xs: '0.8rem', sm: '0.875rem' },
              py: { xs: 0.75, sm: 1 },
              px: { xs: 2, sm: 3 },
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
              sx={{ ml: { xs: 0, sm: 0.5 } }}
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
