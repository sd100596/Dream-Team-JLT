import { useState } from 'react';
import { Dialog, DialogContent, IconButton, Box, Typography, Button, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function PdfViewerModal({ open, onClose, pdfUrl, billDescription }) {
  const [loading, setLoading] = useState(true);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${billDescription || 'document'}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 3, minHeight: '80vh' }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderBottom: '1px solid #eee' }}>
        <Typography variant="h6" sx={{ fontFamily: '"Fredoka", sans-serif' }}>
          {billDescription}
        </Typography>
        <Box>
          <IconButton onClick={handleDownload} title="Download PDF" size="small">
            <DownloadIcon />
          </IconButton>
          <IconButton onClick={onClose} title="Close" size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      
      <DialogContent sx={{ p: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: '#333' }}>
        {loading && (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 8 }}>
            <CircularProgress color="inherit" />
            <Typography sx={{ color: 'white', mt: 2 }}>Loading PDF...</Typography>
          </Box>
        )}
        <iframe
          src={pdfUrl}
          title={billDescription}
          style={{ 
            width: '100%', 
            height: '75vh', 
            display: loading ? 'none' : 'block',
            border: 'none'
          }}
          onLoad={() => setLoading(false)}
        />
      </DialogContent>
    </Dialog>
  );
}

export default PdfViewerModal;
