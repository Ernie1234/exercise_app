import React from "react";
import { Button, Stack, Typography } from "@mui/material";

import BPImg from "../assets/icons/body-part.png";
import TImg from "../assets/icons/target.png";
import EImg from "../assets/icons/equipment.png";

function Detail({ exerciseDetail }) {
  const { gifUrl, name, bodyPart, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BPImg,
      name: bodyPart,
    },
    {
      icon: TImg,
      name: target,
    },
    {
      icon: EImg,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { xs: "20px", lg: "35px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercises keep you strong. {name} is one of the best exercise to
          target your {target}. It will help you improve your mood and gain
          energy.
        </Typography>
        {extraDetail?.map((item, index) => (
          <Stack key={index} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: "30px", xs: "20px" } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default Detail;
