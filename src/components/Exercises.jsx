import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Pagination } from "@mui/material";

import { ExerciseCard } from "./";
import { apiOption, dataFetchFn } from "../utils/apiFetch";

function Exercises({ exercises, setExercises, bodyPart }) {
  const [currentPage, setCurrentPage] = useState(1);

  const exercisePerPage = 9;
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercise = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    catFetchFn();
  }, [bodyPart]);

  const catFetchFn = async () => {
    let exercisesData = [];

    if (bodyPart === "all") {
      exercisesData = await dataFetchFn(
        "https://exercisedb.p.rapidapi.com/exercises/",
        apiOption
      );
    } else {
      exercisesData = await dataFetchFn(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        apiOption
      );
    }
    setExercises(exercisesData);
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h4">Showing Results</Typography>
      <Stack
        direction="row"
        sx={{ gap: { xs: "50px", lg: "110px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercise.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="secondary"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
}

export default Exercises;
