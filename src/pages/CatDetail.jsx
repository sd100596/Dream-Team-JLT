import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Paper, Grid, Chip, IconButton, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VetBillList from '../components/VetBillList';
import catsData from '../data/cats';
import { alpha } from '@mui/material/styles';

function CatDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleBackToCats = () => {
    sessionStorage.setItem('catsGalleryRestoreScroll', 'true');
    navigate('/cats');
  };
  
  const cat = catsData.cats.find(c => c.id === id);
  
  const hasPendingBills = cat?.vetBills?.some(b => b.status === 'due' || b.status === 'unpaid');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [id]);

  if (!cat) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" color="error">
          Cat not found
        </Typography>
        <Button onClick={handleBackToCats} sx={{ mt: 2 }}>
          Back to Cats
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 6, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <IconButton 
          onClick={handleBackToCats} 
          sx={{ mb: 3 }}
          aria-label="Back to cats"
        >
          <ArrowBackIcon />
        </IconButton>

        <Grid container spacing={4}>
          {/* Photo Section */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={(theme) => ({
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
                boxShadow: `0 12px 40px ${alpha(
                  theme.palette.common.black,
                  theme.palette.mode === 'light' ? 0.1 : 0.55
                )}`,
              })}
            >
              <Box sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  src={cat.photoUrl}
                  alt={cat.name}
                  sx={{
                    width: '100%',
                    aspectRatio: '1/1',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                {/* Photo Frame Effect */}
                <Box
                  sx={(theme) => ({
                    position: 'absolute',
                    inset: 0,
                    border: '8px solid',
                    borderColor: theme.palette.background.paper,
                    pointerEvents: 'none',
                  })}
                />
                {/* Pending Bills Badge */}
                {hasPendingBills && (
                  <Box
                    sx={(theme) => ({
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      bgcolor: 'error.main',
                      color: 'error.contrastText',
                      px: 2,
                      py: 1,
                      borderRadius: 3,
                      boxShadow: `0 4px 12px ${alpha(theme.palette.error.main, 0.5)}`,
                    })}
                  >
                    <ErrorIcon sx={{ fontSize: 20 }} />
                    <Typography variant="subtitle2" fontWeight={600}>
                      Pending Vet Bills
                    </Typography>
                  </Box>
                )}
              </Box>
            </Paper>
          </Grid>

          {/* Info Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 3 }}>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 700, 
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  mb: 1
                }}
              >
                {cat.name}
              </Typography>
              
               <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                 {cat.breed && <Chip label={cat.breed} variant="outlined" color="secondary" />}
                 {cat.gender && <Chip label={cat.gender} variant="outlined" color="primary" />}
                 {cat.age && <Chip label={`${cat.age} years old`} variant="outlined" />}
                 {cat.tnr && <Chip label="TNR" icon={<CheckCircleIcon fontSize="small" />} color="success" />}
               </Box>

              <Typography variant="h6" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                {cat.bio}
              </Typography>
            </Box>

            {/* Location */}
            <Paper
              sx={(theme) => ({
                p: 3,
                mb: 4,
                bgcolor: cat.location === 'Homed' 
                  ? alpha(theme.palette.success.main, theme.palette.mode === 'light' ? 0.1 : 0.2)
                  : alpha(theme.palette.secondary.main, theme.palette.mode === 'light' ? 0.08 : 0.18),
              })}
            >
              {cat.location === 'Homed' ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <HomeIcon sx={{ color: 'success.main', fontSize: 32 }} />
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 600 }}>
                      Homed
                    </Typography>
                    <Typography variant="body1" fontWeight={500} color="success.main">
                      Lives indoors with a loving family
                    </Typography>
                  </Box>
                </Box>
              ) : (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocationOnIcon sx={{ color: 'secondary.main', fontSize: 32 }} />
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 600 }}>
                      Location
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      {cat.location}
                    </Typography>
                  </Box>
                </Box>
              )}
            </Paper>

            {/* Notes */}
            {cat.notes && cat.notes.length > 0 && (
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2, fontFamily: '"Fredoka", sans-serif', fontWeight: 600 }}>
                  Notes
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {cat.notes.map((note, index) => (
                    <Chip 
                      key={index} 
                      label={note} 
                      sx={{ 
                        bgcolor: 'action.hover',
                        '& .MuiChip-label': { px: 2 }
                      }} 
                    />
                  ))}
                </Box>
              </Box>
            )}

            {/* Vet Bills */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontFamily: '"Fredoka", sans-serif', fontWeight: 600 }}>
                Veterinary Bills
              </Typography>
              <VetBillList bills={cat.vetBills} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CatDetail;
