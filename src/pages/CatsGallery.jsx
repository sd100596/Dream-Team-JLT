import { Container, Typography, Grid, Box, Chip, FormControl, InputLabel, Select, MenuItem, Collapse, IconButton, FormControlLabel, Checkbox } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterListAltIcon from '@mui/icons-material/FilterAlt';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import CatCard from '../components/CatCard';
import catsData from '../data/cats';

function CatsGallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const cats = (catsData?.cats) || [];
  
  // Filter states (only for stray cats)
  const hasAdoptableParam = searchParams.get('adoptable') === 'true';
  const [filters, setFilters] = useState({
    tnrOnly: searchParams.get('tnr') === 'true',
    adoptableOnly: hasAdoptableParam,
    gender: searchParams.get('gender') || ''
  });
  const hasActiveFilters = filters.tnrOnly || filters.adoptableOnly || !!filters.gender;

  // Collapsible section states
  const [strayExpanded, setStrayExpanded] = useState(true);
  const [homedExpanded, setHomedExpanded] = useState(true);
  const [showFilters, setShowFilters] = useState(hasAdoptableParam || filters.tnrOnly || !!filters.gender);
  const [showHomedFilters, setShowHomedFilters] = useState(false);
  const [homedGenderFilter, setHomedGenderFilter] = useState('');

  // Scroll position - save on scroll
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem('catsGalleryScrollY', window.scrollY.toString());
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Restore scroll position on mount
  useEffect(() => {
    const savedPosition = sessionStorage.getItem('catsGalleryScrollY');
    if (savedPosition) {
      window.scrollTo({
        top: parseInt(savedPosition, 10),
        left: 0,
        behavior: 'auto'
      });
    }
  }, []);

  // Group cats by status
  const strayCats = useMemo(() => cats.filter(cat => cat.status === 'stray'), [cats]);
  const homedCats = useMemo(() => cats.filter(cat => cat.status === 'homed'), [cats]);

  // Filter stray cats
  const filteredStrayCats = useMemo(() => {
    return strayCats.filter(cat => {
      if (filters.tnrOnly && !cat.tnr) return false;
      if (filters.adoptableOnly && !cat.adoptable) return false;
      if (filters.gender && cat.gender !== filters.gender) return false;
      return true;
    });
  }, [strayCats, filters.tnrOnly, filters.adoptableOnly, filters.gender]);

  // Filter homed cats by gender
  const filteredHomedCats = useMemo(() => {
    return homedCats.filter(cat => {
      if (homedGenderFilter && cat.gender !== homedGenderFilter) return false;
      return true;
    });
  }, [homedCats, homedGenderFilter]);

  const clearFilters = () => {
    setFilters({
      tnrOnly: false,
      adoptableOnly: false,
      gender: ''
    });
    setShowFilters(false);
  };

  // Sync filters to URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.tnrOnly) params.set('tnr', 'true');
    if (filters.adoptableOnly) params.set('adoptable', 'true');
    if (filters.gender) params.set('gender', filters.gender);
    setSearchParams(params);
  }, [filters.tnrOnly, filters.adoptableOnly, filters.gender, setSearchParams]);

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
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ 
              maxWidth: 600, 
              mx: 'auto',
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' }
            }}
          >
            Each cat has a unique story. Click on any cat to learn more about them, 
            including their location and any pending vet bills.
          </Typography>
        </Box>

        {/* Stray Cats Section */}
        {strayCats.length > 0 && (
          <Box sx={{ mb: 4 }}>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              mb: 2,
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 }
            }}
            onClick={() => setStrayExpanded(!strayExpanded)}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton size="small" sx={{ transform: strayExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                  <ExpandMoreIcon />
                </IconButton>
                <Typography variant="h5" sx={{ fontSize: { xs: '0.8rem', sm: '1.25rem', md: '1.5rem' }, whiteSpace: 'nowrap' }}>
                  Stray Cats ({filteredStrayCats.length})
                </Typography>
              </Box>

              {!showFilters ? (
                <IconButton
                  size="small"
                  aria-label="Show filters"
                  onClick={(e) => { e.stopPropagation(); setShowFilters(true); }}
                  sx={{ mr: 0.5 }}
                >
                  <FilterListAltIcon />
                </IconButton>
              ) : (
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: { xs: 0.5, sm: 1.5, md: 2 },
                    flexDirection: { xs: 'row', sm: 'row' },
                    flexWrap: { xs: 'nowrap', sm: 'wrap' },
                    maxWidth: '100%'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FormControlLabel
                    control={
                      <Checkbox 
                        size="small"
                        checked={filters.tnrOnly}
                        onChange={(e) => setFilters(prev => ({ ...prev, tnrOnly: e.target.checked }))}
                      />
                    }
                    label={<Box component="span" sx={{ fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>TNR'd</Box>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox 
                        size="small"
                        checked={filters.adoptableOnly}
                        onChange={(e) => setFilters(prev => ({ ...prev, adoptableOnly: e.target.checked }))}
                      />
                    }
                    label={<Box component="span" sx={{ fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>Adoptable</Box>}
                  />
                  <FormControl size="small" sx={{ minWidth: { xs: 70, sm: 90, md: 100 } }}>
                    <InputLabel sx={{ fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>Gender</InputLabel>
                    <Select
                      value={filters.gender}
                      label="Gender"
                      onChange={(e) => setFilters(prev => ({ ...prev, gender: e.target.value }))}
                      sx={{ fontSize: { xs: '0.7rem', sm: '0.875rem' }, pr: { xs: 4, sm: 0 } }}
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                    </Select>
                  </FormControl>
                  {hasActiveFilters && (
                    <Chip 
                      label="Clear" 
                      size="small" 
                      onClick={(e) => { e.stopPropagation(); clearFilters(); setShowFilters(false); }}
                      sx={{ cursor: 'pointer', fontSize: { xs: '0.65rem', sm: '0.75rem' }, height: { xs: 22 } }}
                    />
                  )}
                </Box>
              )}
            </Box>
            
            <Collapse in={strayExpanded}>
              <Grid container spacing={2}>
                {filteredStrayCats.map(cat => (
                  <Grid item xs={6} sm={6} md={4} key={cat.id}>
                    <CatCard cat={cat} />
                  </Grid>
                ))}
              </Grid>
            </Collapse>
            
            {strayExpanded && <Box sx={{ height: 1, bgcolor: 'divider', mt: 4 }} />}
          </Box>
        )}

        {/* Homed Cats Section */}
        {homedCats.length > 0 && (
          <Box sx={{ mb: 4 }}>
            <Box 
              sx={{ 
              display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                mb: 2,
                cursor: 'pointer',
                '&:hover': { opacity: 0.8 }
              }}
              onClick={() => setHomedExpanded(!homedExpanded)}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton size="small" sx={{ transform: homedExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                  <ExpandMoreIcon />
                </IconButton>
                <Typography variant="h5" sx={{ fontSize: { xs: '0.8rem', sm: '1.25rem', md: '1.5rem' } }}>
                  Homed Cats ({filteredHomedCats.length})
                </Typography>
              </Box>

              {!showHomedFilters ? (
                <IconButton
                  size="small"
                  aria-label="Show filters"
                  onClick={(e) => { e.stopPropagation(); setShowHomedFilters(true); }}
                  sx={{ mr: 0.5 }}
                >
                  <FilterListAltIcon />
                </IconButton>
              ) : (
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: { xs: 0.5, sm: 1.5 },
                    flexWrap: { xs: 'nowrap', sm: 'wrap' },
                    maxWidth: '100%'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FormControl size="small" sx={{ minWidth: { xs: 70, sm: 90, md: 100 } }}>
                    <InputLabel sx={{ fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>Gender</InputLabel>
                    <Select
                      value={homedGenderFilter}
                      label="Gender"
                      onChange={(e) => setHomedGenderFilter(e.target.value)}
                      sx={{ fontSize: { xs: '0.7rem', sm: '0.875rem' }, pr: { xs: 4, sm: 0 } }}
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                    </Select>
                  </FormControl>
                  {homedGenderFilter && (
                    <Chip 
                      label="Clear" 
                      size="small" 
                      onClick={(e) => { e.stopPropagation(); setHomedGenderFilter(''); setShowHomedFilters(false); }}
                      sx={{ cursor: 'pointer', fontSize: { xs: '0.65rem', sm: '0.75rem' }, height: { xs: 22 } }}
                    />
                  )}
                </Box>
              )}
            </Box>
            
            <Collapse in={homedExpanded}>
              <Grid container spacing={2}>
                {filteredHomedCats.map(cat => (
                  <Grid item xs={6} sm={6} md={4} key={cat.id}>
                    <CatCard cat={cat} />
                  </Grid>
                ))}
              </Grid>
            </Collapse>
          </Box>
        )}

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
