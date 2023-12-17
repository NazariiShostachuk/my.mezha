import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  useMediaQuery,
} from "@mui/material";
import Copyright from "./Copyright";
import screenshot from "../images/screenshot.jpeg";
import badge from "../images/badge.png";

function HomePage() {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:768px)");

  return (
    <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
      <Paper
        elevation={24}
        sx={{
          display: "flex",
          flexDirection: matches ? "row" : "column",
          alignItems: "center",
          my: { xs: 3, md: 6 },
          p: { xs: 2, md: 3 },
        }}
      >
        <Box
          sx={{
            width: matches ? "50%" : "100%",
            marginBottom: "30px",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            align={matches ? "left" : "center"}
          >
            My Mezha
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            align={matches ? "left" : "center"}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: matches ? "row" : "column",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                width: "50%",
                height: "100px",
                backgroundImage: `url(${badge})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            />
            <Button
              onClick={() => {
                navigate("/privacy");
              }}
            >
              Privacy Policy
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: matches ? "50%" : "70%",
            height: "70vh",
            backgroundImage: `url(${screenshot})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />
      </Paper>
      <Copyright />
    </Container>
  );
}

export default HomePage;
