import { Accordion as MuiAccordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const StyledAccordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '16px !important',
  marginBottom: 12,
  overflow: 'hidden',
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: '0 0 12px 0',
  },
}));

function AccordionItem({ title, children, defaultExpanded = false }) {
  return (
    <StyledAccordion defaultExpanded={defaultExpanded}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main', fontSize: 32 }} />}
        sx={{
          bgcolor: 'rgba(78, 205, 196, 0.08)',
          py: 2,
          '&.Mui-expanded': {
            minHeight: 72,
          },
        }}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            fontFamily: '"Fredoka", sans-serif',
            fontWeight: 600,
            fontSize: '1.4rem',
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 4, bgcolor: 'white' }}>
        <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
          {children}
        </Typography>
      </AccordionDetails>
    </StyledAccordion>
  );
}

function CustomAccordion({ items }) {
  return (
    <Box>
      {items.map((item, index) => (
        <AccordionItem 
          key={index} 
          title={item.title} 
          defaultExpanded={index === 0}
        >
          {item.content}
        </AccordionItem>
      ))}
    </Box>
  );
}

export default CustomAccordion;
