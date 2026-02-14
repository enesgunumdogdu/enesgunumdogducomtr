import { Box, Container, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 6,
        borderTop: "1px solid #1e1e1e",
        background: "#161616",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#888888",
              fontWeight: 500,
              letterSpacing: "0.5px",
            }}
          >
            Made with
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "1.2rem",
              animation: "pulse 2s ease-in-out infinite",
              "@keyframes pulse": {
                "0%, 100%": { transform: "scale(1)" },
                "50%": { transform: "scale(1.2)" },
              },
            }}
          >
            &#x1F49A;
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#888888",
              fontWeight: 500,
              letterSpacing: "0.5px",
            }}
          >
            by
          </Typography>
          <Link
            href="https://enesgunumdogdu.com.tr"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: "0.5px",
              color: "#10b981",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                filter: "brightness(1.2)",
              },
            }}
          >
            3nes
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
