import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        bgcolor: 'white',
        color: 'text.primary',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
      }}
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
        
        <Box sx={{ display: 'flex', gap: 2 }}>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
