import { Box, Container, Typography, Paper, Button, Link } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { alpha } from "@mui/material/styles";

function Donate() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, fontFamily: '"Fredoka", sans-serif', mb: 1 }}
          >
            Want to help?
          </Typography>
          <Typography variant="body1" color="text.secondary">
            We operate entirely on goodwill and donations - every dirham goes
            directly toward food, medical care, and the wellbeing of our cats.
          </Typography>
        </Box>

        <Box sx={{ display: "grid", gap: 3 }}>
          <Paper
            sx={(theme) => ({
              p: { xs: 2, md: 3 },
              borderRadius: 3,
              border: `1px solid ${alpha(theme.palette.success.main, 0.3)}`,
              bgcolor: alpha(
                theme.palette.success.main,
                theme.palette.mode === "light" ? 0.05 : 0.12,
              ),
            })}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <PaymentIcon color="success" />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Pay the Vet Clinic
              </Typography>
            </Box>
            <Box sx={{ display: "grid", gap: 1.5, mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                This link goes directly to the vet clinic.
              </Typography>
              <Box
                sx={(theme) => ({
                  display: "grid",
                  gap: 1,
                  p: 1.5,
                  borderRadius: 2,
                  border: `1px dashed ${alpha(theme.palette.success.main, 0.4)}`,
                  bgcolor: alpha(
                    theme.palette.success.main,
                    theme.palette.mode === "light" ? 0.08 : 0.16,
                  ),
                })}
              >
                <Typography
                  variant="overline"
                  sx={{
                    letterSpacing: "0.08em",
                    color: "text.secondary",
                    fontWeight: 600,
                  }}
                >
                  Payment details
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 2,
                    flexWrap: "wrap",
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Payment reason
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Invoice of animal
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 2,
                    flexWrap: "wrap",
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Reference to include
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 700, color: "#000" }}
                  >
                    Dream Team
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={(theme) => ({
                  p: 1.5,
                  borderRadius: 2,
                  bgcolor: alpha(
                    theme.palette.secondary.main,
                    theme.palette.mode === "light" ? 0.08 : 0.18,
                  ),
                  borderLeft: `3px solid ${theme.palette.secondary.main}`,
                })}
              >
                <Typography variant="body2" color="text.secondary">
                  Any donation, big or small, is greatly appreciated. All funds
                  received go towards our outstanding bills or future kitty
                  cases, which sadly are always ongoing.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Button
                component="a"
                href="https://www.karasvet.com/payment/"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="success"
              >
                Pay
              </Button>
            </Box>
          </Paper>

          <Paper
            sx={(theme) => ({
              p: { xs: 2, md: 3 },
              borderRadius: 3,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              bgcolor: alpha(
                theme.palette.primary.main,
                theme.palette.mode === "light" ? 0.04 : 0.12,
              ),
            })}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <VolunteerActivismIcon color="primary" />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Other Ways to Help
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              There are many ways you can support our work. We have an{" "}
              <Link
                href="https://www.amazon.ae/hz/wishlist/ls/3404FFTMY1VLR?ref_=wl_share"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontWeight: 600,
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  color: "primary.main",
                  "&:hover": { color: "primary.dark" },
                }}
              >
                Amazon Wish List
              </Link>{" "}
              to help keep our feeding stations stocked.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              You can also help by fostering or adopting a cat in need,
              volunteering your time with feeding or wet-food rounds, or simply
              spreading the word about what we do.
            </Typography>
          </Paper>

          <Paper
            sx={(theme) => ({
              p: { xs: 2, md: 3 },
              borderRadius: 3,
              border: `1px solid ${alpha(theme.palette.secondary.main, 0.25)}`,
              bgcolor: alpha(
                theme.palette.secondary.main,
                theme.palette.mode === "light" ? 0.05 : 0.12,
              ),
            })}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <ContactMailIcon color="secondary" />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Contact Us
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Typography variant="body2">
                Email:{" "}
                <a href="mailto:dreamteamcatsjlt@gmail.com">
                  dreamteamcatsjlt@gmail.com
                </a>
              </Typography>
              <Typography variant="body2">Location: JLT, Dubai, UAE</Typography>
            </Box>
          </Paper>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontStyle: "italic", textAlign: "center" }}
          >
            Every contribution, no matter the size, helps us provide food,
            medical care, and love to cats in need.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Donate;
