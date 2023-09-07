import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { apiOption, dataFetchFn } from "../utils/apiFetch";
import { HorizontalScrollBar } from "./";

function SearchExercises({ setExercises, setBodyPart, bodyPart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    const bodyPartsData = await dataFetchFn(
      "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
      apiOption
    );
    setBodyParts(["all", ...bodyPartsData]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      const exercisesData = await dataFetchFn(
        `https://exercisedb.p.rapidapi.com/exercises/`,
        apiOption
      );

      const searchedResult = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(searchTerm) ||
          exercise.target.toLowerCase().includes(searchTerm) ||
          exercise.bodyPart.toLowerCase().includes(searchTerm) ||
          exercise.equipment.toLowerCase().includes(searchTerm)
      );
      setSearchTerm("");
      setExercises(searchedResult);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { xs: "30px", lg: "44px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercise You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { xs: "350px", lg: "800px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { xs: "80px", lg: "175px" },
            fontSize: { xs: "14px", lg: "20px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSubmit}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar
          data={bodyParts}
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
}

export default SearchExercises;
