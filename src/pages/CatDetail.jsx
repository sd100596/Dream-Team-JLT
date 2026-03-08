import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Paper, Grid, Chip, IconButton, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ErrorIcon from '@mui/icons-material/Error';
import VetBillList from '../components/VetBillList';
import catsData from '../data/cats';

function CatDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const cat = catsData.cats.find(c => c.id === id);
  
  const hasPendingBills = cat?.vetBills?.some(b => b.status === 'due' || b.status === 'unpaid');

  if (!cat) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" color="error">
          Cat not found
        </Typography>
        <Button onClick={() => navigate('/cats')} sx={{ mt: 2 }}>
          Back to Cats
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 6, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <IconButton 
          onClick={() => navigate('/cats')} 
          sx={{ mb: 3 }}
          aria-label="Back to cats"
        >
          <ArrowBackIcon />
        </IconButton>

        <Grid container spacing={4}>
          {/* Photo Section */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
              }}
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
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    border: '8px solid white',
                    pointerEvents: 'none',
                  }}
                />
                {/* Pending Bills Badge */}
                {hasPendingBills && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      bgcolor: '#E74C3C',
                      color: 'white',
                      px: 2,
                      py: 1,
                      borderRadius: 3,
                      boxShadow: '0 4px 12px rgba(231,76,60,0.5)',
                    }}
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
              </Box>

              <Typography variant="h6" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                {cat.bio}
              </Typography>
            </Box>

            {/* Location */}
            <Paper sx={{ p: 3, mb: 4, bgcolor: 'rgba(78, 205, 196, 0.08)' }}>
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
                        bgcolor: '#F8F9FA',
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
