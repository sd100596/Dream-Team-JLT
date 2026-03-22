import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Landing from './pages/Landing';
import CatsGallery from './pages/CatsGallery';
import CatDetail from './pages/CatDetail';
import Donate from './pages/Donate';
import { Box } from '@mui/material';
import { Analytics } from '@vercel/analytics/react';

function App({ mode, onToggleMode }) {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <ScrollToTop />
      <Navbar mode={mode} onToggleMode={onToggleMode} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/cats" element={<CatsGallery />} />
        <Route path="/cats/:id" element={<CatDetail />} />
      </Routes>
      <Analytics />
    </Box>
  );
}

export default App;
