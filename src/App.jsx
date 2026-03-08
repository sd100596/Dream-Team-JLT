import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import CatsGallery from './pages/CatsGallery';
import CatDetail from './pages/CatDetail';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cats" element={<CatsGallery />} />
        <Route path="/cats/:id" element={<CatDetail />} />
      </Routes>
    </Box>
  );
}

export default App;
