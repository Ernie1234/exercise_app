import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "../assets/images/Logo.png";

function NavBar() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { xs: "20px", sm: "32px" },
        justifyContent: "none",
        backgroundColor: "tomato",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3a1212",
            borderBottom: "3px solid #ee2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercise"
          style={{ textDecoration: "none", color: "#3a1212" }}
        >
          Exercise
        </a>
      </Stack>
    </Stack>
  );
}

export default NavBar;
