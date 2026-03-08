import { Container, Typography, Grid, Box, Chip } from '@mui/material';
import CatCard from '../components/CatCard';
import catsData from '../data/cats';

function CatsGallery() {
  const cats = (catsData?.cats) || [];

  return (
    <Box sx={{ py: 6, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 2, 
              fontWeight: 600,
              fontSize: { xs: '2rem', md: '2.75rem' }
            }}
          >
            Meet Our Cats
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Each cat has a unique story. Click on any cat to learn more about them, 
            including their location and any pending vet bills.
          </Typography>
          
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
            <Chip 
              label={`${cats.length} cats available`} 
              color="secondary" 
              variant="outlined"
            />
            <Chip 
              label="Click to view details" 
              color="primary" 
              variant="outlined"
            />
          </Box>
        </Box>

        <Grid container spacing={3}>
          {cats.map((cat) => (
            <Grid item xs={12} sm={6} md={4} key={cat.id}>
              <CatCard cat={cat} />
            </Grid>
          ))}
        </Grid>

        {cats.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No cats available at the moment. Check back soon!
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default CatsGallery;
