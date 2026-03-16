import { Container, Typography, Grid, Box, Chip, FormControl, InputLabel, Select, MenuItem, Collapse, IconButton, FormControlLabel, Checkbox } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterListAltIcon from '@mui/icons-material/FilterAlt';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useNavigationType } from 'react-router-dom';
import CatCard from '../components/CatCard';
import catsData from '../data/cats';

function CatsGallery() {
  const cats = (catsData?.cats) || [];
  const navigationType = useNavigationType();
  const hasRestoredScrollRef = useRef(false);
  
  // Filter states (only for stray cats)
  const [filters, setFilters] = useState({
    tnrOnly: false,
    adoptableOnly: false,
    gender: ''
  });
  const hasActiveFilters = filters.tnrOnly || filters.adoptableOnly || !!filters.gender;

  // Collapsible section states
  const [strayExpanded, setStrayExpanded] = useState(true);
  const [homedExpanded, setHomedExpanded] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [filterIconShift, setFilterIconShift] = useState(0);
  const filterControlsRef = useRef(null);
  const filterIconRef = useRef(null);

  // Scroll position - save on scroll
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem('catsGalleryScrollY', window.scrollY.toString());
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useLayoutEffect(() => {
    const controlsWidth = filterControlsRef.current?.offsetWidth || 0;
    const iconWidth = filterIconRef.current?.offsetWidth || 0;
    const shift = Math.max(0, controlsWidth - iconWidth);
    setFilterIconShift(shift);
  }, [showFilters, hasActiveFilters]);

  useEffect(() => {
    const handleResize = () => {
      const controlsWidth = filterControlsRef.current?.offsetWidth || 0;
      const iconWidth = filterIconRef.current?.offsetWidth || 0;
      const shift = Math.max(0, controlsWidth - iconWidth);
      setFilterIconShift(shift);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Restore scroll without visual jump (POP or explicit restore flag)
  useLayoutEffect(() => {
    if (hasRestoredScrollRef.current) {
      return;
    }
    hasRestoredScrollRef.current = true;

    const savedPosition = sessionStorage.getItem('catsGalleryScrollY');
    const restoreFlag = sessionStorage.getItem('catsGalleryRestoreScroll') === 'true';
    const shouldRestore = navigationType === 'POP' || restoreFlag;

    if (shouldRestore && savedPosition) {
      window.scrollTo({
        top: parseInt(savedPosition, 10),
        left: 0,
        behavior: 'auto'
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      sessionStorage.removeItem('catsGalleryScrollY');
    }

    sessionStorage.removeItem('catsGalleryRestoreScroll');
  }, [navigationType]);

  // Group cats by status
  const strayCats = cats.filter(cat => cat.status === 'stray');
  const homedCats = cats.filter(cat => cat.status === 'homed');

  // Filter stray cats
  const filteredStrayCats = strayCats.filter(cat => {
    // TNR filter
    if (filters.tnrOnly && !cat.tnr) {
      return false;
    }
    // Adoptable filter
    if (filters.adoptableOnly && !cat.adoptable) {
      return false;
    }
    // Gender filter
    if (filters.gender && cat.gender !== filters.gender) {
      return false;
    }
    return true;
  });

  const clearFilters = () => {
    setFilters({
      tnrOnly: false,
      adoptableOnly: false,
      gender: ''
    });
    setShowFilters(false);
  };

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

        {/* Stray Cats Section */}
        {strayCats.length > 0 && (
          <Box sx={{ mb: 4 }}>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              flexWrap: { xs: 'wrap', md: 'nowrap' },
              gap: { xs: 1.5, md: 0 },
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
                <Typography variant="h5">
                  Stray Cats ({filteredStrayCats.length})
                </Typography>
              </Box>
              
              {/* Filters in section header */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  gap: 2,
                  width: { xs: '100%', md: 360 },
                  minHeight: 48,
                  position: 'relative'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: `translateY(-50%) translateX(${showFilters ? -filterIconShift : 0}px)`,
                    opacity: showFilters ? 0 : 1,
                    pointerEvents: showFilters ? 'none' : 'auto',
                    transition: 'opacity 20ms ease, transform 20ms ease'
                  }}
                >
                  <IconButton
                    size="small"
                    aria-label="Show filters"
                    onClick={() => setShowFilters(true)}
                    ref={filterIconRef}
                  >
                    <FilterListAltIcon />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: `translateY(-50%) translateX(${showFilters ? 0 : 8}px)`,
                    opacity: showFilters ? 1 : 0,
                    pointerEvents: showFilters ? 'auto' : 'none',
                    transition: 'opacity 20ms ease, transform 1000ms ease'
                  }}
                >
                  <Box ref={filterControlsRef} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <FormControlLabel
                      control={
                        <Checkbox 
                          size="small"
                          checked={filters.tnrOnly}
                          onChange={(e) => setFilters(prev => ({ ...prev, tnrOnly: e.target.checked }))}
                        />
                      }
                      label="TNR'd"
                      sx={{ mr: 2 }}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox 
                          size="small"
                          checked={filters.adoptableOnly}
                          onChange={(e) => setFilters(prev => ({ ...prev, adoptableOnly: e.target.checked }))}
                        />
                      }
                      label="Adoptable"
                      sx={{ mr: 2 }}
                    />
                    <FormControl size="small" sx={{ minWidth: 100 }}>
                      <InputLabel>Gender</InputLabel>
                      <Select
                        value={filters.gender}
                        label="Gender"
                        onChange={(e) => setFilters(prev => ({ ...prev, gender: e.target.value }))}
                      >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                      </Select>
                    </FormControl>
                    {hasActiveFilters && (
                      <Chip 
                        label="Clear" 
                        size="small" 
                        onClick={(e) => {
                          e.stopPropagation();
                          clearFilters();
                        }}
                        sx={{ cursor: 'pointer' }}
                      />
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
            
            <Collapse in={strayExpanded}>
              <Grid container spacing={3}>
                {filteredStrayCats.map(cat => (
                  <Grid item xs={12} sm={6} md={4} key={cat.id}>
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
                <Typography variant="h5">
                  Homed Cats ({homedCats.length})
                </Typography>
              </Box>
            </Box>
            
            <Collapse in={homedExpanded}>
              <Grid container spacing={3}>
                {homedCats.map(cat => (
                  <Grid item xs={12} sm={6} md={4} key={cat.id}>
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
