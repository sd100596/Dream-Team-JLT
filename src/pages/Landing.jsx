import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CustomAccordion from '../components/Accordion';
import PetsIcon from '@mui/icons-material/Pets';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

function Landing() {
  const accordionItems = [
    {
      title: 'Our Mission',
      content: 'We are a community-driven cat support group dedicated to helping stray and abandoned cats in our neighborhood. We provide food, medical care, and find loving homes for cats in need. Every dhiram goes directly to caring for our feline friends.'
    },
    {
      title: 'How We Help',
      content: 'Within our Dream Team Community we look after 40+ cats. We have 8 feeding stations available with dry cat food and fresh water and we endeavour to regularly provide our community cats with wet food. We operate through a network of volunteers who feed, TNR (trap, neuter, release), and socialize community cats. We maintain a roster of adoptable cats, cover veterinary expenses through community donations, and endeavor to find forever homes when required, either within the UAE or overseas.'
    },
    {
      title: 'How You Can Help',
      content: 'There are plenty of ways you can help! We have a Wish List on Amazon to help supply cat food for our many hungry cats. We always need help with our outstanding cat bills and this can be paid directly to the the vets by credit card or cash. You can help by fostering or adopting a cat in need from us or even volunteering your time to help with feeding, or simply spreading the word about our mission. Every bit of help makes a difference!'
    },
    {
      title: 'Success Stories',
      content: 'Since the beginning of 2025, we have found homes for 9 cats, covered over AED 55,000 in veterinary bills, and TNR\'d 18 cats. Our TNR program is extremely important to us by supporting the health and welfare of our stray cat community. Each cat tells a story of transformation.'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #FFF9F5 0%, #FFE8E8 50%, #E8F6F5 100%)',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', bgcolor: 'rgba(255,107,107,0.1)' }} />
        <Box sx={{ position: 'absolute', bottom: -30, left: -30, width: 150, height: 150, borderRadius: '50%', bgcolor: 'rgba(78,205,196,0.15)' }} />
        
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
      <Box sx={{ py: 8, bgcolor: 'white' }}>
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
                <Typography variant="h2" sx={{ fontWeight: 700, color: '#9B59B6' }}>15+</Typography>
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
      <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
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
              bgcolor: 'white', 
              color: 'primary.main',
              py: 1.5,
              px: 5,
              '&:hover': { 
                bgcolor: 'rgba(255,255,255,0.9)',
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
      <Box sx={{ py: 4, bgcolor: '#2D3436', color: 'white', textAlign: 'center' }}>
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
