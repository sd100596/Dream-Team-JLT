import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import ScissorsIcon from '@mui/icons-material/ContentCut';
import { useNavigate } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
import { memo } from 'react';

function CatCard({ cat }) {
  const navigate = useNavigate();
  
  const { hasPendingBills } = cat;

  const handleClick = () => {
    navigate(`/cats/${cat.id}`);
  };

  return (
    <Card 
      onClick={handleClick}
      sx={(theme) => ({ 
        cursor: 'pointer',
        position: 'relative',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: `0 16px 32px ${alpha(
            theme.palette.common.black,
            theme.palette.mode === 'light' ? 0.12 : 0.6
          )}`,
        },
      })}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          image={cat.photoUrl}
          alt={cat.name}
          loading="lazy"
          sx={{
            aspectRatio: '1/1',
            objectFit: 'cover',
          }}
        />
        
        {/* Photo Frame Effect */}
        <Box
          sx={(theme) => ({
            position: 'absolute',
            inset: 0,
            border: '6px solid',
            borderColor: theme.palette.background.paper,
            borderRadius: '14px',
            pointerEvents: 'none',
            boxShadow: `inset 0 0 0 1px ${alpha(
              theme.palette.common.black,
              theme.palette.mode === 'light' ? 0.05 : 0.45
            )}`,
          })}
        />
        
        {/* Pending Bills Badge */}
        {hasPendingBills && (
          <Box
            sx={(theme) => ({
              position: 'absolute',
              top: 12,
              right: 12,
              width: 32,
              height: 32,
              bgcolor: 'error.main',
              color: 'error.contrastText',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 3px 8px ${alpha(theme.palette.error.main, 0.5)}`,
              zIndex: 10,
            })}
            aria-label="Has pending vet bills"
          >
            <ErrorIcon sx={{ color: 'inherit', fontSize: 18 }} />
          </Box>
        )}
        
        {/* TNR Badge */}
        {cat.tnr && (
          <Box
            sx={(theme) => ({
              position: 'absolute',
              top: 12,
              left: 12,
              bgcolor: 'success.main',
              color: 'success.contrastText',
              borderRadius: '50%',
              width: 28,
              height: 28,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 2px 6px ${alpha(theme.palette.success.main, 0.3)}`,
              zIndex: 10,
            })}
            aria-label="TNR Status"
          >
            <ScissorsIcon fontSize="small" />
          </Box>
        )}
      </Box>

      <CardContent sx={{ p: 2, pb: '16px !important' }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontFamily: '"Fredoka", sans-serif',
            fontWeight: 600,
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            mb: 0.5
          }}
        >
          {cat.name}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.5
          }}
        >
          {cat.bio}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default memo(CatCard);
