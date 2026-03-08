import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { useNavigate } from 'react-router-dom';

function CatCard({ cat }) {
  const navigate = useNavigate();
  
  const hasPendingBills = cat.vetBills?.some(bill => bill.status === 'due' || bill.status === 'unpaid');

  const handleClick = () => {
    navigate(`/cats/${cat.id}`);
  };

  return (
    <Card 
      onClick={handleClick}
      sx={{ 
        cursor: 'pointer',
        position: 'relative',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 16px 32px rgba(0,0,0,0.12)',
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          image={cat.photoUrl}
          alt={cat.name}
          sx={{ 
            aspectRatio: '1/1',
            objectFit: 'cover',
          }}
        />
        
        {/* Photo Frame Effect */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            border: '6px solid white',
            borderRadius: '14px',
            pointerEvents: 'none',
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)',
          }}
        />
        
        {/* Pending Bills Badge */}
        {hasPendingBills && (
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              width: 32,
              height: 32,
              bgcolor: '#E74C3C',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 3px 8px rgba(231,76,60,0.5)',
              zIndex: 10,
            }}
            aria-label="Has pending vet bills"
          >
            <ErrorIcon sx={{ color: 'white', fontSize: 18 }} />
          </Box>
        )}
      </Box>

      <CardContent sx={{ p: 2, pb: '16px !important' }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontFamily: '"Fredoka", sans-serif',
            fontWeight: 600,
            fontSize: '1.25rem',
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

export default CatCard;
