import { Box, Typography, Button, Container, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CustomAccordion from '../components/Accordion';
import PetsIcon from '@mui/icons-material/Pets';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { alpha } from '@mui/material/styles';

function Landing() {
  const accordionItems = [
    {
      title: 'Our Mission',
      content: [
        'We are a community-driven cat welfare group committed to supporting stray and dumped cats in our neighborhood. Through TNR, we ensure a healthier, more balanced community cat population over time. If you see a cat with a small snip on its left ear, this indicates that the cat has been neutured.',
        'We also provide food, cover vet costs when needed and work to place vulnerable cats in safe, loving, forever homes.',
        'We operate entirely on goodwill and donations - every single dirham received goes directly toward the care and wellbeing of our feline friends.'
      ]
    },
    {
      title: 'How We Help',
      content: [
        'Within our Dream Team Community we currently care for over 40 cats between Clusters O and R, as well as the surrounding areas. We have eight feeding stations, all of which are regularly replenished with dry cat food and fresh water, and we endeavour to provide wet food on a daily basis.',
        'Our work is made possible through a dedicated network of feeder volunteers. We cover vet bills through community donations and actively seek forever homes either within the UAE or internationally, fundraising towards flight expenses, where required.'
      ]
    },
    {
      title: 'How You Can Help',
      content: [
        <Typography
          key="how-you-can-help-1"
          variant="h6"
          color="text.secondary"
          sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}
        >
          There are many ways you can support our work. We have an{' '}
          <Link
            href="https://www.amazon.ae/hz/wishlist/ls/3404FFTMY1VLR?ref_=wl_share"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontWeight: 600,
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              color: 'primary.main',
              '&:hover': { color: 'primary.dark' },
            }}
          >
            Amazon Wish List
          </Link>{' '}
          to help keep our feeding stations stocked for the many hungry cats we care for. We are
          also always grateful for support with outstanding veterinary bills, which can be paid
          directly to the vets by credit card or cash.
        </Typography>,
        'You can also help by fostering or adopting a cat in need, volunteering your time with feeding or wet-food rounds, or simply spreading the word about what we do. Every contribution, big or small, truly makes a difference.',
        <Box key="how-you-can-help-cta" sx={{ pt: 1 }}>
          <Button
            component={RouterLink}
            to="/donate"
            variant="contained"
            startIcon={<FavoriteIcon />}
            sx={{
              bgcolor: (theme) =>
                theme.palette.mode === 'light' ? '#F06292' : '#EC407A',
              color: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.common.white
                  : theme.palette.getContrastText('#EC407A'),
              '&:hover': {
                bgcolor: (theme) =>
                  theme.palette.mode === 'light' ? '#EC407A' : '#D81B60',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(236,64,122,0.4)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            I want to help!
          </Button>
        </Box>,
      ]
    },
    {
      title: 'Success Stories',
      content: [
        'Our Dream Team Group has rehomed numerous cats (you can see their details on the Our Cats Page). Since the beginning of 2025, we have covered over AED 65,000 in vets bills, and TNR\'d 18 cats, supporting a healthier stray cat community. Every cat tells a story.'
      ]
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={(theme) => ({
          background:
            theme.palette.mode === 'light'
              ? 'linear-gradient(135deg, #FFF9F5 0%, #FFE8E8 50%, #E8F6F5 100%)'
              : 'linear-gradient(135deg, #0F141A 0%, #151C24 45%, #0C2A2A 100%)',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        })}
      >
        {/* Decorative circles */}
        <Box
          sx={(theme) => ({
            position: 'absolute',
            top: -50,
            right: -50,
            width: 200,
            height: 200,
            borderRadius: '50%',
            bgcolor: alpha(theme.palette.primary.main, theme.palette.mode === 'light' ? 0.1 : 0.2),
          })}
        />
        <Box
          sx={(theme) => ({
            position: 'absolute',
            bottom: -30,
            left: -30,
            width: 150,
            height: 150,
            borderRadius: '50%',
            bgcolor: alpha(theme.palette.secondary.main, theme.palette.mode === 'light' ? 0.15 : 0.25),
          })}
        />
        
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 700,
                  mb: 2,
                  lineHeight: 1.2
                }}
              >
                Helping Cats,{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  One Purr
                </Box>{' '}
                at a Time
              </Typography>
              <Typography variant="h5" color="text.secondary" sx={{ mb: 4, fontWeight: 400 }}>
                Join us in making a difference in the lives of cats who need us most.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button 
                  component={RouterLink} 
                  to="/cats"
                  variant="contained" 
                  color="primary"
                  size="large"
                  startIcon={<PetsIcon />}
                  sx={{ 
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem',
                    '&:hover': { 
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 20px rgba(255,107,107,0.4)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  See Our Cats
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <PetsIcon sx={{ fontSize: 200, color: 'primary.light', opacity: 0.3 }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" color="primary.main" sx={{ fontWeight: 700 }}>9+</Typography>
                <Typography variant="h6" color="text.secondary">Cats Adopted</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" color="secondary.main" sx={{ fontWeight: 700 }}>AED 60K+</Typography>
                <Typography variant="h6" color="text.secondary">Vet Bills Covered</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h2"
                  sx={(theme) => ({
                    fontWeight: 700,
                    color: theme.palette.mode === 'light' ? '#9B59B6' : '#C9A5F5',
                  })}
                >
                  15+
                </Typography>
                <Typography variant="h6" color="text.secondary">Active Volunteers</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Accordion Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="md">
          <Typography 
            variant="h3" 
            sx={{ mb: 4, textAlign: 'center', fontWeight: 600 }}
          >
            Learn More About Us
          </Typography>
          <CustomAccordion items={accordionItems} />
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={(theme) => ({
          py: 8,
          textAlign: 'center',
          color:
            theme.palette.mode === 'light'
              ? theme.palette.primary.contrastText
              : theme.palette.text.primary,
          background:
            theme.palette.mode === 'light'
              ? theme.palette.primary.main
              : `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.22)} 0%, ${alpha(
                  theme.palette.secondary.main,
                  0.18
                )} 60%, ${alpha(theme.palette.primary.dark, 0.28)} 100%)`,
          borderTop:
            theme.palette.mode === 'light'
              ? 'none'
              : `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
        })}
      >
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
            Ready to Meet Your New Best Friend?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Browse our cat profiles and find your perfect companion.
          </Typography>
          <Button 
            component={RouterLink} 
            to="/cats"
            variant="contained"
            size="large"
            sx={{ 
              bgcolor: (theme) =>
                theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.primary.main,
              color: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.primary.main
                  : theme.palette.primary.contrastText,
              py: 1.5,
              px: 5,
              '&:hover': { 
                bgcolor: (theme) =>
                  theme.palette.mode === 'light'
                    ? 'rgba(255,255,255,0.9)'
                    : theme.palette.primary.light,
                transform: 'scale(1.05)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            View Cats
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={(theme) => ({
          py: 4,
          bgcolor: theme.palette.mode === 'light' ? '#2D3436' : '#0B0F14',
          color: 'common.white',
          textAlign: 'center',
        })}
      >
        <Container>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © 2026 Dream Team JLT. All rights reserved. Made with ❤️ for cats.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Landing;
