import { Container, Box, Paper, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Legal() {
  return (
    <Box sx={{ py: 6, px: 2, bgcolor: 'background.default', minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, border: 1, borderColor: 'divider' }}>
          <Link
            component={RouterLink}
            to="/"
            underline="hover"
            color="text.secondary"
            sx={{ display: 'inline-block', mb: 3 }}
          >
            Back to Home
          </Link>

          <Typography variant="h3" sx={{ mb: 1, fontWeight: 700 }}>
            Privacy Policy
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Last updated: March 2026
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box>
              <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                Who We Are
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Dream Team JLT is an informal group of volunteers helping community cats in Jumeirah Lakes Towers, Dubai. 
                This website showcases cat profiles, tracks veterinary bills, 
                and helps connect supporters with ways to donate.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                Analytics
              </Typography>
              <Typography variant="body1" color="text.secondary">
                We use Vercel Analytics to understand how many people visit our site and which pages are most viewed. 
                This shows us general stats - we cannot identify you personally.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                We do not use advertising cookies or share any data with third parties.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                External Links
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Our website contains links to external sites. When you click on these links, you leave this site. 
                Please review the privacy policies of those sites before sharing any information.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                Contact Us
              </Typography>
              <Typography variant="body1" color="text.secondary">
                If you have any questions, contact us at{' '}
                <Link href="mailto:dreamteamcatsjlt@gmail.com" color="primary">
                  dreamteamcatsjlt@gmail.com
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Legal;
