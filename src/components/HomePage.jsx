import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Typography, Button, Paper } from "@mui/material";
import Copyright from "./Copyright";
import screenshot from "../images/screenshot.jpeg";
import badge from "../images/badge.png";

function HomePage() {
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
      <Paper
        elevation={24}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          my: { xs: 3, md: 6 },
          p: { xs: 2, md: 3 },
        }}
      >
        <Box
          sx={{
            width: "50%",
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            My Mezha
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Button
              sx={{
                width: "30%",
                height: "60px",
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
            width: "50%",
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
