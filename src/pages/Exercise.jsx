import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { Detail, ExerciseVideo, SimilarExercise } from "../components/";
import { apiOption, dataFetchFn, ytOption } from "../utils/apiFetch";

function Exercise() {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [tme, setTme] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchExerciseDetailFn();
  }, [id]);
  const fetchExerciseDetailFn = async () => {
    const exerciseUrl = "https://exercisedb.p.rapidapi.com";
    const ytUrl = "https://youtube-search-and-download.p.rapidapi.com";

    const exerciseDetailData = await dataFetchFn(
      `${exerciseUrl}/exercises/exercise/${id}`,
      apiOption
    );
    const exerciseVdData = await dataFetchFn(
      `${ytUrl}/search?query=${exerciseDetailData.name}`,
      ytOption
    );
    const TMEData = await dataFetchFn(
      `${exerciseUrl}/exercises/target/${exerciseDetailData.target}`,
      apiOption
    );
    const EData = await dataFetchFn(
      `${exerciseUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
      apiOption
    );

    setExerciseDetail(exerciseDetailData);
    setExerciseVideos(exerciseVdData.contents);
    setTme(TMEData);
    setEquipment(EData);
  };

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercise tme={tme} equipment={equipment} />
    </Box>
  );
}

export default Exercise;
