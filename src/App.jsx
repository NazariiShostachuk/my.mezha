import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import HomePage from "./components/HomePage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicyPage />,
      },
    ],
    { basename: "/my.mezha" }
  );

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
