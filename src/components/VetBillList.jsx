import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Tooltip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SupportIcon from "@mui/icons-material/Support";
import PaymentIcon from "@mui/icons-material/Payment";
import { alpha } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "AED" }).format(amount);

function BillItem({ bill, isPending, onHelp }) {
  return (
    <Paper
      sx={(theme) => ({
        p: 2,
        mb: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 1,
        borderLeft: `4px solid ${
          isPending ? theme.palette.error.main : theme.palette.secondary.main
        }`,
        bgcolor: alpha(
          isPending ? theme.palette.error.main : theme.palette.secondary.main,
          theme.palette.mode === "light" ? 0.04 : 0.12,
        ),
      })}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, flex: 1 }}>
        {isPending ? (
          <WarningIcon sx={{ color: "error.main" }} />
        ) : (
          <CheckCircleIcon sx={{ color: "secondary.main" }} />
        )}
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" fontWeight={600}>
            {bill.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {bill.date &&
              (isPending
                ? `Due: ${formatDate(bill.date)}`
                : `Paid: ${formatDate(bill.date)}`)}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {isPending && (
          <Tooltip title="Help or donate to support this cat">
            <Chip
              icon={<SupportIcon fontSize="small" />}
              label="Help"
              onClick={() => onHelp(bill.description)}
              clickable
              color="success"
              sx={{ fontWeight: 600 }}
            />
          </Tooltip>
        )}
        <Chip
          label={formatCurrency(bill.amount)}
          color={isPending ? "error" : "success"}
          variant="outlined"
          sx={{ fontWeight: 600 }}
        />
      </Box>
    </Paper>
  );
}

function VetBillList({ bills }) {
  const [supportModal, setSupportModal] = useState({
    open: false,
    description: "",
  });
  const [showAllBills, setShowAllBills] = useState(false);

  const pendingBills =
    bills?.filter((b) => b.status === "unpaid") || [];
  const paidBills = bills?.filter((b) => b.status === "paid") || [];
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

  const { pending: visiblePendingBills, paid: visiblePaidBills } =
    getVisibleBills();

  const openSupportModal = (description) => {
    setSupportModal({ open: true, description });
  };

  const closeSupportModal = () => {
    setSupportModal({ open: false, description: "" });
  };

  if (!bills || bills.length === 0) {
    return (
      <Box sx={{ textAlign: "center", py: 4 }}>
        <CheckCircleIcon
          sx={{ fontSize: 48, color: "secondary.main", mb: 1 }}
        />
        <Typography variant="h6" color="text.secondary">
          No vet bills - this cat is healthy!
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <SupportModal
        open={supportModal.open}
        onClose={closeSupportModal}
        billDescription={supportModal.description}
      />

      {visiblePendingBills.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontFamily: '"Fredoka", sans-serif',
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.1rem' }
            }}
          >
            Pending Bills
          </Typography>
          {visiblePendingBills.map((bill) => (
            <BillItem key={bill.id} bill={bill} isPending={true} onHelp={openSupportModal} />
          ))}
        </Box>
      )}

      {visiblePaidBills.length > 0 && (
        <Box>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontFamily: '"Fredoka", sans-serif',
              fontWeight: 600,
              fontSize: { xs: '1rem', sm: '1.1rem' }
            }}
          >
            Paid Bills
          </Typography>
          {visiblePaidBills.map((bill) => (
            <BillItem key={bill.id} bill={bill} isPending={false} onHelp={openSupportModal} />
          ))}
        </Box>
      )}

      {shouldCollapse && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            variant="outlined"
            size="small"
            onClick={() => setShowAllBills((prev) => !prev)}
          >
            {showAllBills ? "Show fewer bills" : "Show all bills"}
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
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontFamily: '"Fredoka", sans-serif' }}>
          Help Support {billDescription || "This Cat"}
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Thank you for wanting to help! Your contributions make a real
            difference in the lives of our community cats.
          </Typography>

          {/* Donation Options */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" color="text.primary" sx={{ mb: 1 }}>
              Ways to Contribute:
            </Typography>
            <Paper
              variant="outlined"
              sx={(theme) => ({
                p: 1.5,
                maxWidth: { xs: "100%", sm: 360 },
                borderRadius: 2,
                borderColor: alpha(theme.palette.success.main, 0.4),
                bgcolor: alpha(
                  theme.palette.success.main,
                  theme.palette.mode === "light" ? 0.06 : 0.14,
                ),
              })}
            >
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Prefer the full details? Visit our Donate page for payment info,
                reference text, and other ways to help.
              </Typography>
              <Button
                component={RouterLink}
                to="/donate"
                variant="contained"
                color="success"
                size="small"
                startIcon={<PaymentIcon fontSize="small" />}
              >
                Go to Donate
              </Button>
            </Paper>
          </Box>

          {/* Contact Information */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" color="text.primary" sx={{ mb: 1 }}>
              Contact Us:
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Typography variant="body2">
                Email:{" "}
                <a href="mailto:dreamteamcatsjlt@gmail.com">
                  dreamteamcatsjlt@gmail.com
                </a>
              </Typography>
              <Typography variant="body2">Location: JLT, Dubai, UAE</Typography>
            </Box>
          </Box>

          {/* Message */}
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontStyle: "italic" }}
            >
              Every contribution, no matter the size, helps us provide food,
              medical care, and love to cats in need.
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} variant="outlined">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
