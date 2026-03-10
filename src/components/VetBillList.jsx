import { useState } from 'react';
import { Box, Typography, Paper, Chip, IconButton, Tooltip } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import PdfViewerModal from './PdfViewerModal';

function VetBillList({ bills }) {
  const [pdfModal, setPdfModal] = useState({ open: false, pdfUrl: null, description: '' });
  
  const pendingBills = bills?.filter(b => b.status === 'due' || b.status === 'unpaid') || [];
  const paidBills = bills?.filter(b => b.status === 'paid') || [];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'AED'
    }).format(amount);
  };

  const openPdf = (pdfUrl, description) => {
    setPdfModal({ open: true, pdfUrl, description });
  };

  if (!bills || bills.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <CheckCircleIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 1 }} />
        <Typography variant="h6" color="text.secondary">
          No vet bills - this cat is healthy!
        </Typography>
      </Box>
    );
  }

  const BillItem = ({ bill, isPending }) => (
    <Paper
      sx={{
        p: 2,
        mb: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 1,
        borderLeft: `4px solid ${isPending ? '#E74C3C' : '#4ECDC4'}`,
        bgcolor: isPending ? 'rgba(231, 76, 60, 0.04)' : 'rgba(78, 205, 196, 0.04)'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
        {isPending ? (
          <WarningIcon sx={{ color: '#E74C3C' }} />
        ) : (
          <CheckCircleIcon sx={{ color: 'secondary.main' }} />
        )}
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" fontWeight={600}>
            {bill.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {isPending ? `Due: ${formatDate(bill.date)}` : `Paid: ${formatDate(bill.date)}`}
          </Typography>
        </Box>
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {bill.pdfUrl && (
          <Tooltip title="View attached PDF">
            <IconButton 
              onClick={() => openPdf(bill.pdfUrl, bill.description)}
              sx={{ 
                color: '#E74C3C',
                '&:hover': { bgcolor: 'rgba(231, 76, 60, 0.1)' }
              }}
            >
              <PictureAsPdfIcon />
            </IconButton>
          </Tooltip>
        )}
        <Chip 
          label={formatCurrency(bill.amount)} 
          color={isPending ? 'error' : 'success'} 
          variant="outlined"
          sx={{ fontWeight: 600 }}
        />
      </Box>
    </Paper>
  );

  return (
    <Box>
      <PdfViewerModal 
        open={pdfModal.open}
        onClose={() => setPdfModal({ ...pdfModal, open: false })}
        pdfUrl={pdfModal.pdfUrl}
        billDescription={pdfModal.description}
      />
      
      {pendingBills.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontFamily: '"Fredoka", sans-serif', fontWeight: 600 }}>
            Pending Bills
          </Typography>
          {pendingBills.map((bill) => (
            <BillItem key={bill.id} bill={bill} isPending={true} />
          ))}
        </Box>
      )}

      {paidBills.length > 0 && (
        <Box>
          <Typography variant="h6" sx={{ mb: 2, fontFamily: '"Fredoka", sans-serif', fontWeight: 600 }}>
            Paid Bills
          </Typography>
          {paidBills.map((bill) => (
            <BillItem key={bill.id} bill={bill} isPending={false} />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default VetBillList;
