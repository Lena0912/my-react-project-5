import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    accent: "#2a3942",
    buttonAccent: "rgb(110, 187, 191)",
    grey: "#f8f3f3",
    error: "#dc143c",
    bgInput: "#f9f0da",
    white: "#fff",
    textColor: "#242222",
  },
  radii: {
    sm: "5px",
    md: "10px",
  },
  spacing: (value) => `${value * 4}px`,
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/my-react-project-5">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
