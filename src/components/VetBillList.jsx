import { useEffect, useState } from 'react';
import { Box, Typography, Paper, Chip, IconButton, Tooltip, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SupportIcon from '@mui/icons-material/Support';
import PaymentIcon from '@mui/icons-material/Payment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { alpha } from '@mui/material/styles';

function VetBillList({ bills }) {
  const [supportModal, setSupportModal] = useState({ open: false, description: '' });
  const [showAllBills, setShowAllBills] = useState(false);
   
  const pendingBills = bills?.filter(b => b.status === 'due' || b.status === 'unpaid') || [];
  const paidBills = bills?.filter(b => b.status === 'paid') || [];
  const totalBills = bills?.length || 0;
  const maxVisibleBills = 2;
  const shouldCollapse = totalBills > maxVisibleBills;

  useEffect(() => {
    setShowAllBills(false);
  }, [totalBills]);

  const getVisibleBills = () => {
    if (!shouldCollapse || showAllBills) {
      return { pending: pendingBills, paid: paidBills };
    }

    if (pendingBills.length >= maxVisibleBills) {
      return { pending: pendingBills.slice(0, maxVisibleBills), paid: [] };
    }

    const remaining = maxVisibleBills - pendingBills.length;
    return { pending: pendingBills, paid: paidBills.slice(0, remaining) };
  };

  const { pending: visiblePendingBills, paid: visiblePaidBills } = getVisibleBills();

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

  const openSupportModal = (description) => {
    setSupportModal({ open: true, description });
  };

  const closeSupportModal = () => {
    setSupportModal({ open: false, description: '' });
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
      sx={(theme) => ({
        p: 2,
        mb: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 1,
        borderLeft: `4px solid ${
          isPending ? theme.palette.error.main : theme.palette.secondary.main
        }`,
        bgcolor: alpha(
          isPending ? theme.palette.error.main : theme.palette.secondary.main,
          theme.palette.mode === 'light' ? 0.04 : 0.12
        ),
      })}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
        {isPending ? (
          <WarningIcon sx={{ color: 'error.main' }} />
        ) : (
          <CheckCircleIcon sx={{ color: 'secondary.main' }} />
        )}
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" fontWeight={600}>
            {bill.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {bill.date && (isPending ? `Due: ${formatDate(bill.date)}` : `Paid: ${formatDate(bill.date)}`)}
          </Typography>
        </Box>
      </Box>
      
       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {bill.status === 'due' && (
            <Tooltip title="Help or donate to support this cat">
              <Chip
                icon={<SupportIcon fontSize="small" />}
                label="Help"
                onClick={() => openSupportModal(bill.description)}
                clickable
                color="success"
                sx={{ fontWeight: 600 }}
              />
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
       <SupportModal 
         open={supportModal.open}
         onClose={closeSupportModal}
         billDescription={supportModal.description}
       />
       
       {visiblePendingBills.length > 0 && (
         <Box sx={{ mb: 4 }}>
           <Typography variant="h6" sx={{ mb: 2, fontFamily: '"Fredoka", sans-serif', fontWeight: 600 }}>
             Pending Bills
           </Typography>
           {visiblePendingBills.map((bill) => (
             <BillItem key={bill.id} bill={bill} isPending={true} />
           ))}
         </Box>
       )}

      {visiblePaidBills.length > 0 && (
        <Box>
          <Typography variant="h6" sx={{ mb: 2, fontFamily: '"Fredoka", sans-serif', fontWeight: 600 }}>
            Paid Bills
          </Typography>
          {visiblePaidBills.map((bill) => (
            <BillItem key={bill.id} bill={bill} isPending={false} />
          ))}
        </Box>
      )}

      {shouldCollapse && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            variant="outlined"
            size="small"
            onClick={() => setShowAllBills((prev) => !prev)}
          >
            {showAllBills ? 'Show fewer bills' : 'Show all bills'}
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default VetBillList;

// Support Modal Component
function SupportModal({ open, onClose, billDescription }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontFamily: '"Fredoka", sans-serif' }}>
          Help Support {billDescription || 'This Cat'}
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Thank you for wanting to help! Your contributions make a real difference in the lives of our community cats.
          </Typography>
          
          {/* Donation Options */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" color="text.primary" sx={{ mb: 1 }}>
              Ways to Contribute:
            </Typography>
            
            {/* Placeholder donation links - you can replace these with actual links */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
              <Button 
                variant="contained"
                startIcon={<PaymentIcon fontSize="small" />}
                sx={{ width: '100%', justifyContent: 'start' }}
                onClick={() => { /* TODO: Add actual donation link handler */ }}
              >
                Donate via PayPal (Placeholder)
              </Button>
              <Button 
                variant="contained"
                startIcon={<AttachMoneyIcon fontSize="small" />}
                sx={{ width: '100%', justifyContent: 'start' }}
                onClick={() => { /* TODO: Add actual donation link handler */ }}
              >
                Bank Transfer Details (Placeholder)
              </Button>
              <Button 
                variant="outlined"
                startIcon={<FavoriteIcon fontSize="small" />}
                sx={{ width: '100%', justifyContent: 'start' }}
                onClick={() => { /* TODO: Add actual donation link handler */ }}
              >
                Sponsor This Cat (Placeholder)
              </Button>
            </Box>
          </Box>
          
          {/* Contact Information */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" color="text.primary" sx={{ mb: 1 }}>
              Contact Us:
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Typography variant="body2">
                Email: <a href="mailto:dreamteamjlt@example.com">dreamteamjlt@example.com</a>
              </Typography>
              <Typography variant="body2">
                Phone: +971 50 123 4567
              </Typography>
              <Typography variant="body2">
                Location: JLT, Dubai, UAE
              </Typography>
            </Box>
          </Box>
          
          {/* Message */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
              Every contribution, no matter the size, helps us provide food, medical care, and love to cats in need.
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} variant="outlined">
            Close
          </Button>
          <Button onClick={onClose} variant="contained" color="primary">
            I'll Help
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
