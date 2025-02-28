import {
  Badge,
  Box,
  Button,
  Grid2,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import {
  FooterBottom,
  FooterContainer,
  FooterSelect,
  FooterTitle,
  FooterWrapper,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer maxWidth={false}>
        <Grid2 container>
          <Grid2 size={{ sm: 3 }}>
            <FooterTitle variant="body1">About us</FooterTitle>
            <Typography variant="body2">Platform overview</Typography>
            <Typography variant="body2">How to</Typography>
            <Typography variant="body2">Register</Typography>
            <Typography variant="body2">Terms of usage</Typography>
          </Grid2>

          <Grid2 size={{ sm: 3 }}>
            <Typography variant="body1" mb="2rem">
              Customer Service
            </Typography>
            <Typography variant="body2">Contact us</Typography>
            <Typography variant="body2">FAQ</Typography>
            <Typography variant="body2">Payment methods</Typography>
            <Typography variant="body2">Money-back guarantee</Typography>
            <Typography variant="body2">Returns</Typography>
            <Typography variant="body2">Shipping</Typography>
            <Typography variant="body2">Warranty and claims</Typography>
          </Grid2>

          <Grid2 size={{ sm: 3 }}>
            <Typography variant="body1" mb="2rem">
              Catalogue
            </Typography>
            <Typography variant="body2">Furniture</Typography>
            <Typography variant="body2">Lighting</Typography>
            <Typography variant="body2">Kitchen</Typography>
            <Typography variant="body2">Accessories</Typography>
            <Typography variant="body2">Outdoor</Typography>
            <Typography variant="body2">Brand</Typography>
            <Typography variant="body2">Designers</Typography>
          </Grid2>

          <Grid2 size={{ sm: 3 }}>
            <Box display="flex" justifyContent="flex-end" alignItems="center">
              <Typography variant="h6">mohd</Typography>
              <Badge
                sx={{
                  backgroundColor: "#d32f2f",
                  color: "#fff",
                  padding: "0.125rem 0.5rem",
                  marginLeft: "0.5rem",
                  borderRadius: "1rem",
                  fontSize: "0.875rem",
                }}
              >
                Pro
              </Badge>
            </Box>
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2} sx={{ mt: 4, alignItems: "flex-end" }}>
          <Grid2>
            <Typography variant="body2" color="#A3A3A0" mb="8px">
              Language
            </Typography>
            <FooterSelect size="small" defaultValue="English" disabled>
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Italian">Italian</MenuItem>
            </FooterSelect>
          </Grid2>
          <Grid2>
            <Typography variant="body2" color="#A3A3A0" mb="8px">
              Currency
            </Typography>
            <FooterSelect
              size="small"
              defaultValue="EUR"
              sx={{ background: "#6A6A69" }}
              disabled
            >
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
            </FooterSelect>
          </Grid2>
          <Grid2>
            <Button
              variant="contained"
              sx={{ width: "140px", backgroundColor: "#636363" }}
            >
              Confirm
            </Button>
          </Grid2>
        </Grid2>
      </FooterContainer>

      <FooterBottom>
        <Typography variant="body2" color="#A3A3A0">
          &copy; 2011-2022 Mollura & C. S.p.a. P.IVA IT02759750835
        </Typography>

        <Box display="flex" gap={2}>
          <Typography variant="body2" color="#A3A3A0">
            Privacy Policy
          </Typography>
          <Typography variant="body2" color="#A3A3A0">
            Cookies Policy
          </Typography>
        </Box>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
