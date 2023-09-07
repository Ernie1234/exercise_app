import { Stack, Typography } from "@mui/material";
import React from "react";

import PartIcon from "../assets/icons/gym.png";

function Parts({ item, bodyPart, setBodyPart }) {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodypart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={PartIcon}
        alt="PartIcon"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3a1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
}

export default Parts;
