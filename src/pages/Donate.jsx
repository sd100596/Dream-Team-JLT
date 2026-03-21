import { Box, Container, Typography, Paper, Button, Link, Grid } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { alpha } from "@mui/material/styles";

function Donate() {
  return (
    <Box
      sx={(theme) => ({
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
        background:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #FFF9F5 0%, #FFFFFF 45%, #F6FFFD 100%)"
            : "linear-gradient(180deg, #0F141A 0%, #141B23 45%, #0C1117 100%)",
      })}
    >
      <Box
        sx={(theme) => ({
          position: "absolute",
          top: -120,
          right: -80,
          width: 260,
          height: 260,
          borderRadius: "50%",
          bgcolor: alpha(theme.palette.primary.main, theme.palette.mode === "light" ? 0.08 : 0.16),
        })}
      />
      <Box
        sx={(theme) => ({
          position: "absolute",
          bottom: -140,
          left: -90,
          width: 320,
          height: 320,
          borderRadius: "50%",
          bgcolor: alpha(theme.palette.secondary.main, theme.palette.mode === "light" ? 0.08 : 0.14),
        })}
      />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h2"
            sx={{ 
              fontWeight: 700, 
              fontFamily: '"Fredoka", sans-serif', 
              mb: 1,
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' }
            }}
          >
            Want to help?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640, mx: "auto" }}>
            We operate entirely on goodwill and donations - every dirham goes directly toward food,
            medical care, and the wellbeing of our cats.
          </Typography>
        </Box>

        <Grid container spacing={3} alignItems="stretch">
          <Grid item xs={12} md={7}>
            <Paper
              sx={(theme) => ({
                height: "100%",
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                position: "relative",
                overflow: "hidden",
                border: `1px solid ${alpha(theme.palette.success.main, 0.3)}`,
                background:
                  theme.palette.mode === "light"
                    ? `linear-gradient(160deg, ${alpha(theme.palette.success.main, 0.12)} 0%, #FFFFFF 50%, ${alpha(
                        theme.palette.success.main,
                        0.18
                      )} 100%)`
                    : `linear-gradient(160deg, ${alpha(theme.palette.success.main, 0.2)} 0%, rgba(14,18,22,0.92) 55%, ${alpha(
                        theme.palette.success.main,
                        0.14
                      )} 100%)`,
                boxShadow:
                  theme.palette.mode === "light"
                    ? `0 20px 40px ${alpha(theme.palette.success.main, 0.2)}`
                    : `0 20px 40px ${alpha(theme.palette.common.black, 0.5)}`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow:
                    theme.palette.mode === "light"
                      ? `0 24px 44px ${alpha(theme.palette.success.main, 0.28)}`
                      : `0 24px 44px ${alpha(theme.palette.common.black, 0.6)}`,
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  top: -40,
                  right: -20,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  bgcolor: alpha(theme.palette.success.main, theme.palette.mode === "light" ? 0.18 : 0.22),
                },
              })}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                <Box
                  sx={(theme) => ({
                    width: { xs: 44, sm: 56 },
                    height: { xs: 44, sm: 56 },
                    borderRadius: "18px",
                    display: "grid",
                    placeItems: "center",
                    color: theme.palette.success.main,
                    background: `linear-gradient(135deg, ${alpha(theme.palette.success.main, 0.25)} 0%, ${alpha(
                      theme.palette.success.main,
                      0.6
                    )} 100%)`,
                  })}
                >
                  <PaymentIcon sx={{ fontSize: { xs: 24, sm: 30 } }} />
                </Box>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: { xs: '1.25rem', sm: '1.4rem', md: '1.6rem' }
                  }}
                >
                  Pay the Vet Clinic
                </Typography>
              </Box>

              <Box sx={{ display: "grid", gap: 2, mb: 3 }}>
                <Typography variant="body1" color="text.secondary">
                  This link goes directly to the vet clinic.
                </Typography>
                <Box
                  sx={(theme) => ({
                    display: "grid",
                    gap: 1.2,
                    p: 2,
                    borderRadius: 3,
                    border: `1px dashed ${alpha(theme.palette.success.main, 0.4)}`,
                    bgcolor: alpha(
                      theme.palette.success.main,
                      theme.palette.mode === "light" ? 0.08 : 0.18,
                    ),
                  })}
                >
                  <Typography
                    variant="overline"
                    sx={{
                      letterSpacing: "0.12em",
                      color: "text.secondary",
                      fontWeight: 700,
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
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      Dream Team
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={(theme) => ({
                    p: 2,
                    borderRadius: 3,
                    bgcolor: alpha(
                      theme.palette.secondary.main,
                      theme.palette.mode === "light" ? 0.08 : 0.18,
                    ),
                    borderLeft: `4px solid ${theme.palette.secondary.main}`,
                  })}
                >
                  <Typography variant="body2" color="text.secondary">
                    Any donation, big or small, is greatly appreciated. All funds received go
                    towards our outstanding bills or future kitty cases, which sadly are always
                    ongoing.
                  </Typography>
                </Box>
              </Box>

              <Button
                component="a"
                href="https://www.karasvet.com/payment/"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="success"
                sx={{
                  width: "100%",
                  py: 1.4,
                  fontSize: "1rem",
                  "&:hover": { transform: "translateY(-2px)" },
                  transition: "transform 0.2s ease",
                }}
              >
                Pay
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box sx={{ display: "grid", gap: 3 }}>
              <Paper
                sx={(theme) => ({
                  p: { xs: 3, md: 3.5 },
                  borderRadius: 4,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                  bgcolor: alpha(
                    theme.palette.primary.main,
                    theme.palette.mode === "light" ? 0.05 : 0.12,
                  ),
                  boxShadow:
                    theme.palette.mode === "light"
                      ? `0 14px 28px ${alpha(theme.palette.primary.main, 0.15)}`
                      : `0 14px 28px ${alpha(theme.palette.common.black, 0.45)}`,
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-4px)" },
                })}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1.5 }}>
                  <Box
                    sx={(theme) => ({
                      width: { xs: 40, sm: 48 },
                      height: { xs: 40, sm: 48 },
                      borderRadius: "16px",
                      display: "grid",
                      placeItems: "center",
                      color: theme.palette.primary.main,
                      background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.25)} 0%, ${alpha(
                        theme.palette.primary.main,
                        0.6
                      )} 100%)`,
                    })}
                  >
                    <VolunteerActivismIcon sx={{ fontSize: { xs: 22, sm: 26 } }} />
                  </Box>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', sm: '1.25rem' }
                    }}
                  >
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
                      fontWeight: 700,
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
                  You can also help by fostering or adopting a cat in need, volunteering your time
                  with feeding or wet-food rounds, or simply spreading the word about what we do.
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  We also have a fundraising tracker for all the cats in JLT.{" "}
                  <Link
                    href="https://jltcatloversdonationtracker-ruddy.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      fontWeight: 700,
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                      color: "primary.main",
                      "&:hover": { color: "primary.dark" },
                    }}
                  >
                    View Fundraising Tracker
                  </Link>
                </Typography>
              </Paper>

              <Paper
                sx={(theme) => ({
                  p: { xs: 3, md: 3.5 },
                  borderRadius: 4,
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.25)}`,
                  bgcolor: alpha(
                    theme.palette.secondary.main,
                    theme.palette.mode === "light" ? 0.06 : 0.12,
                  ),
                  boxShadow:
                    theme.palette.mode === "light"
                      ? `0 14px 28px ${alpha(theme.palette.secondary.main, 0.14)}`
                      : `0 14px 28px ${alpha(theme.palette.common.black, 0.45)}`,
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-4px)" },
                })}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1.5 }}>
                  <Box
                    sx={(theme) => ({
                      width: { xs: 40, sm: 48 },
                      height: { xs: 40, sm: 48 },
                      borderRadius: "16px",
                      display: "grid",
                      placeItems: "center",
                      color: theme.palette.secondary.main,
                      background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.25)} 0%, ${alpha(
                        theme.palette.secondary.main,
                        0.6
                      )} 100%)`,
                    })}
                  >
                    <ContactMailIcon sx={{ fontSize: { xs: 22, sm: 26 } }} />
                  </Box>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: '1.1rem', sm: '1.25rem' }
                    }}
                  >
                    Contact Us
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography variant="body2">
                    Email:{" "}
                    <Link
                      href="mailto:dreamteamcatsjlt@gmail.com"
                      sx={{ fontWeight: 700, color: "text.primary" }}
                    >
                      dreamteamcatsjlt@gmail.com
                    </Link>
                  </Typography>
                  <Typography variant="body2">Location: JLT, Dubai, UAE</Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={(theme) => ({
            mt: { xs: 4, md: 6 },
            p: { xs: 2.5, md: 3 },
            borderRadius: 999,
            textAlign: "center",
            bgcolor: alpha(
              theme.palette.primary.main,
              theme.palette.mode === "light" ? 0.08 : 0.2,
            ),
          })}
        >
          <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
            Every contribution, no matter the size, helps us provide food, medical care, and love
            to cats in need.
          </Typography>
</Box>
      </Container>
    </Box>
  );
}

export default Donate;
