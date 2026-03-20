import { Box, Typography, Button, Container, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { alpha } from '@mui/material/styles';

function Landing() {
  const learnMoreItems = [
    {
      title: 'Our Mission',
      kicker: 'Purpose',
      icon: FavoriteIcon,
      accent: '#FF6B6B',
      content: [
        'We are a community-driven cat welfare group committed to supporting stray and dumped cats in our neighborhood (between Clusters O and R in JLT). Through our Trap‑Neuter‑Release (TNR) programme, we ensure a healthier, more balanced community cat population over time. If you see a cat with a small snip on its left ear, this indicates that the cat has been neutured.',
        'In addition to TNR, we provide daily food, cover vet costs when needed and work to place vulnerable cats in safe, loving, forever homes.',
        'We operate entirely on goodwill and donations - every single dirham received goes directly toward the care and wellbeing of our feline friends.',
      ],
    },
    {
      title: 'How We Help',
      kicker: 'Care in Action',
      icon: LocalHospitalIcon,
      accent: '#4ECDC4',
      content: [
        'Within our Dream Team Community we currently care for over 40 cats between Clusters O and R, as well as the surrounding areas. We have eight feeding stations, all of which are regularly replenished with dry cat food and fresh water, and we endeavour to provide wet food on a daily basis.',
        'Our work is made possible through a dedicated network of feeder volunteers. We cover vet bills through community donations and actively seek forever homes either within the UAE or internationally, fundraising towards flight expenses, where required.',
      ],
    },
    {
      title: 'How You Can Help',
      kicker: 'Join the Team',
      icon: VolunteerActivismIcon,
      accent: '#F4A261',
      content: [
        <Typography
          key="how-you-can-help-1"
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.7, fontSize: '1rem' }}
        >
          There are many ways you can support our work. We have an{' '}
          <Link
            href="https://www.amazon.ae/hz/wishlist/ls/3404FFTMY1VLR?ref_=wl_share"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontWeight: 700,
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
        'You can also help by fostering or adopting a cat in need, volunteering your time with feeding or wet-food rounds, or simply spreading the word about what we do. Every contribution, big or small, truly makes a difference.'
      ],
    },
    // 'Success Stories' box removed per plan
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
              <Button 
                component={RouterLink}
                to="/donate"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<FavoriteIcon />}
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 20px rgba(236,64,122,0.4)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                I want to Help!
              </Button>
            </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                sx={{
                  position: 'relative',
                  width: 240,
                  height: 240,
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* Soft white radiance behind the logo for blending with pink banner */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    
                    zIndex: 0,
                  }}
                />
                <img src="/logo2.png" alt="Dream Team JLT logo" style={{ width: 200, height: 'auto', zIndex: 1 }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>



      {/* Learn More Section */}
      <Box
        sx={(theme) => ({
          py: { xs: 8, md: 10 },
          position: 'relative',
          overflow: 'hidden',
          background:
            theme.palette.mode === 'light'
              ? 'linear-gradient(180deg, #FFF9F5 0%, #FFFFFF 40%, #F6FFFD 100%)'
              : 'linear-gradient(180deg, #0F141A 0%, #141B23 45%, #0C1117 100%)',
        })}
      >
        <Box
          sx={(theme) => ({
            position: 'absolute',
            top: -120,
            left: -80,
            width: 260,
            height: 260,
            borderRadius: '50%',
            bgcolor: alpha(theme.palette.primary.main, theme.palette.mode === 'light' ? 0.08 : 0.18),
            filter: 'blur(0px)',
          })}
        />
        <Box
          sx={(theme) => ({
            position: 'absolute',
            bottom: -140,
            right: -90,
            width: 300,
            height: 300,
            borderRadius: '50%',
            bgcolor: alpha(theme.palette.secondary.main, theme.palette.mode === 'light' ? 0.08 : 0.16),
          })}
        />
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: 600, mb: 1 }}
            >
              Learn More About Us
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {learnMoreItems.map((item, index) => {
              const Icon = item.icon;
              const isFirst = index === 0;
              return (
                <Grid item xs={12} md={isFirst ? 12 : 6} key={item.title}>
                  <Box
                    sx={(theme) => ({
                      height: '100%',
                      p: { xs: 3, md: 4 },
                      borderRadius: 4,
                      position: 'relative',
                      overflow: 'hidden',
                      background:
                        theme.palette.mode === 'light'
                          ? `linear-gradient(160deg, ${alpha(item.accent, 0.08)} 0%, #FFFFFF 45%, ${alpha(item.accent, 0.16)} 100%)`
                          : `linear-gradient(160deg, ${alpha(item.accent, 0.18)} 0%, rgba(16,20,26,0.92) 55%, ${alpha(item.accent, 0.12)} 100%)`,
                      border: `1px solid ${alpha(item.accent, theme.palette.mode === 'light' ? 0.2 : 0.3)}`,
                      boxShadow:
                        theme.palette.mode === 'light'
                          ? `0 18px 35px ${alpha(item.accent, 0.18)}`
                          : `0 18px 35px ${alpha(theme.palette.common.black, 0.45)}`,
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow:
                          theme.palette.mode === 'light'
                            ? `0 24px 42px ${alpha(item.accent, 0.24)}`
                            : `0 24px 42px ${alpha(theme.palette.common.black, 0.55)}`,
                      },
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: -50,
                        right: -40,
                        width: 140,
                        height: 140,
                        borderRadius: '50%',
                        bgcolor: alpha(item.accent, theme.palette.mode === 'light' ? 0.18 : 0.22),
                      },
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -60,
                        left: -30,
                        width: 120,
                        height: 120,
                        borderRadius: 32,
                        border: `1px dashed ${alpha(item.accent, theme.palette.mode === 'light' ? 0.3 : 0.4)}`,
                        transform: 'rotate(-6deg)',
                      },
                    })}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: '18px',
                          display: 'grid',
                          placeItems: 'center',
                          color: item.accent,
                          background: `linear-gradient(135deg, ${alpha(
                            item.accent,
                            0.2
                          )} 0%, ${alpha(item.accent, 0.55)} 100%)`,
                        }}
                      >
                        <Icon sx={{ fontSize: 30 }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="overline"
                          sx={{
                            fontWeight: 700,
                            letterSpacing: '0.14em',
                            color: alpha(item.accent, 0.85),
                          }}
                        >
                          {item.kicker}
                        </Typography>
                        <Typography
                          variant="h4"
                          sx={{ fontWeight: 600, fontSize: { xs: '1.6rem', md: '1.8rem' } }}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          marginLeft: 'auto',
                          fontFamily: '"Fredoka", sans-serif',
                          fontWeight: 600,
                          fontSize: '1.1rem',
                          color: alpha(item.accent, 0.85),
                        }}
                      >
                        {`0${index + 1}`}
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {item.content.map((paragraph, idx) =>
                        typeof paragraph === 'string' ? (
                          <Typography
                            key={idx}
                            variant="body1"
                            color="text.secondary"
                            sx={{ lineHeight: 1.7, fontSize: '1rem' }}
                          >
                            {paragraph}
                          </Typography>
                        ) : (
                          <Box key={idx}>{paragraph}</Box>
                        )
                      )}
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
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
            to="/cats?adoptable=true"
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
            Meet Adoptable Cats
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
