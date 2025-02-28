import {
  Box,
  Badge,
  Button,
  Container,
  Select,
  Typography,
  styled,
} from "@mui/material";

export const FooterWrapper = styled(Box)`
  background-color: #323232;
  color: white;
  margin-top: 4rem;
`;

export const FooterContainer = styled(Container)`
  padding: 2.5rem !important;
`;

export const FooterTitle = styled(Typography)`
  margin-bottom: 2rem;
`;

export const FooterBadge = styled(Badge)`
  background-color: #d32f2f;
  color: #fff;
  padding: 0.125rem 0.5rem;
  margin-left: 0.5rem;
  border-radius: 1rem;
  font-size: 0.875rem;
`;

export const FooterSelect = styled(Select)`
  background: #6a6a69;
  border: 0.0625rem solid #636363;
  border-radius: 0.75rem;
`;

export const FooterBottom = styled(Box)`
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-top: 0.0625rem solid #a3a3a0;
  padding: 1.25rem;
  margin: 0 1.25rem;
`;
