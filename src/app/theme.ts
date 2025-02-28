import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#323232" },
    secondary: { main: "#ff4081" },
    text: { primary: "#a3a3a0", secondary: "#323232" },
  },
  typography: {
    h6: { fontSize: "2rem", fontWeight: "bold", color: "#fff" },
    h5: { fontSize: "1.75rem", fontWeight: 500, color: "#a3a3a0" },
    button: { fontSize: "1rem", textTransform: "none" },
  },
});

export default theme;
