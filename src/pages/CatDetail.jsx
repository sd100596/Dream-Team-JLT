import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Paper, Grid, Chip, IconButton, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VetBillList from '../components/VetBillList';
import catsData from '../data/cats';
import { alpha } from '@mui/material/styles';

function CatDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isBioExpanded, setIsBioExpanded] = useState(false);
  const handleBackToCats = () => {
    sessionStorage.setItem('catsGalleryRestoreScroll', 'true');
    navigate('/cats');
  };
  
  const cats = catsData.cats;
  const cat = cats.find(c => c.id === id);
  const currentIndex = cats.findIndex(c => c.id === id);
  const prevCat = currentIndex > 0 ? cats[currentIndex - 1] : null;
  const nextCat = currentIndex < cats.length - 1 ? cats[currentIndex + 1] : null;
  
  const hasPendingBills = cat?.vetBills?.some(b => b.status === 'due' || b.status === 'unpaid');
  const isLongBio = (cat?.bio?.length || 0) > 220;
  const shouldClampBio = isLongBio && !isBioExpanded;

  useEffect(() => {
    setIsBioExpanded(false);
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
      {/* Side Navigation Buttons */}
      {prevCat && (
        <Box
          onClick={() => navigate(`/cats/${prevCat.id}`)}
          sx={(theme) => ({
            position: 'fixed',
            left: { xs: 8, md: 16 },
            top: '50%',
            transform: 'translateY(-50%)',
            width: 40,
            height: 40,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            bgcolor: alpha(theme.palette.primary.main, 0.08),
            color: theme.palette.primary.main,
            opacity: 0.35,
            transition: 'all 0.3s ease',
            zIndex: 10,
            '&:hover': {
              opacity: 1,
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.4)}`,
              transform: 'translateY(-50%) scale(1.15)',
            },
          })}
        >
          <ArrowBackIcon sx={{ fontSize: 24 }} />
        </Box>
      )}
      {nextCat && (
        <Box
          onClick={() => navigate(`/cats/${nextCat.id}`)}
          sx={(theme) => ({
            position: 'fixed',
            right: { xs: 8, md: 16 },
            top: '50%',
            transform: 'translateY(-50%)',
            width: 40,
            height: 40,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            bgcolor: alpha(theme.palette.secondary.main, 0.08),
            color: theme.palette.secondary.main,
            opacity: 0.35,
            transition: 'all 0.3s ease',
            zIndex: 10,
            '&:hover': {
              opacity: 1,
              bgcolor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
              boxShadow: `0 4px 20px ${alpha(theme.palette.secondary.main, 0.4)}`,
              transform: 'translateY(-50%) scale(1.15)',
            },
          })}
        >
          <ArrowForwardIcon sx={{ fontSize: 24 }} />
        </Box>
      )}
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
                  loading="lazy"
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
                 {cat.adoptable && <Chip label="Adoptable" icon={<HomeIcon fontSize="small" />} color="secondary" />}
               </Box>

              <Typography
                id="cat-bio"
                variant="h6"
                color="text.secondary"
                sx={{
                  mb: isLongBio ? 2 : 4,
                  lineHeight: 1.7,
                  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                  display: shouldClampBio ? '-webkit-box' : 'block',
                  WebkitLineClamp: shouldClampBio ? 3 : 'unset',
                  WebkitBoxOrient: shouldClampBio ? 'vertical' : 'unset',
                  overflow: shouldClampBio ? 'hidden' : 'visible'
                }}
              >
                {cat.bio}
              </Typography>
              {isLongBio && (
                <Button
                  fullWidth
                  size="small"
                  onClick={() => setIsBioExpanded(prev => !prev)}
                  aria-expanded={isBioExpanded}
                  aria-controls="cat-bio"
                  variant="outlined"
                  endIcon={<ExpandMoreIcon />}
                  sx={(theme) => ({
                    mb: 2,
                    textTransform: 'none',
                    borderRadius: 999,
                    py: 0.75,
                    borderColor: alpha(theme.palette.text.primary, 0.2),
                    bgcolor: alpha(theme.palette.text.primary, 0.04),
                    '&:hover': {
                      bgcolor: alpha(theme.palette.text.primary, 0.08),
                      borderColor: alpha(theme.palette.text.primary, 0.35)
                    },
                    '& .MuiButton-endIcon': {
                      transition: 'transform 0.2s ease',
                      transform: isBioExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
                    }
                  })}
                >
                  {isBioExpanded ? 'View less' : 'View more'}
                </Button>
              )}
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
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2, 
                    fontFamily: '"Fredoka", sans-serif', 
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                  }}
                >
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
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 2, 
                  fontFamily: '"Fredoka", sans-serif', 
                  fontWeight: 600,
                  fontSize: { xs: '1.1rem', sm: '1.25rem' }
                }}
              >
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
