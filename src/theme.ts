import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Custom primary color
    },
    secondary: {
      main: "#dc004e", // Custom secondary color
    },
    background: {
      default: "#f4f4f4", // Default background color
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    button: {
      textTransform: "none", // Prevent uppercase button text
    },
  },
});

export default theme;
