import React from "react";
import { Box, Button, Typography } from "@mui/material";

import HeroImg from "../assets/images/banner.png";
function HeroBanner() {
  return (
    <Box
      sx={{ mt: { xs: "70px", lg: "212px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { xs: "40px", lg: "44px" } }}
        mb="23px"
        mt="30px"
      >
        Sweet, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercise
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercise"
        sx={{ backgroundColor: "#ff2625", p: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        fontSize="200px"
        color="#ff2625"
        sx={{ opacity: 0.1, display: { xs: "none", lg: "block" } }}
      >
        Exercise
      </Typography>
      <img alt="heroImg" src={HeroImg} className="hero-banner-img" />
    </Box>
  );
}

export default HeroBanner;
