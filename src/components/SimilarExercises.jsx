import React from 'react'
import { Box, Stack, Typography } from "@mui/material"

import HorizontalScrollBar from "./HorizontalScrollBar"
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises, exerciseDetail }) => {
    return (
        <Box sx={{ mt: { lg: "100px", xs: "0" }, ml: "20px" }}>
            <Typography variant="h3" mb="20px" mt="10px">
                Exercises targeting <span style={{ color: "#ff2625", textTransform: "capitalize" }}>{exerciseDetail.target}</span>
            </Typography>
            <Stack direction="row" sx={{ p: "2px", position: "relative", mb: "20px" }}>
                {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />}
            </Stack>
            <Typography variant="h3" mb="20px" mt="100px">
                Exercises using <span style={{ color: "#ff2625", textTransform: "capitalize" }}>{exerciseDetail.equipment}</span>
            </Typography>
            <Stack direction="row" sx={{ p: "2", position: "relative", mb: "20px" }}>
                {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader />}
            </Stack>
        </Box >
    )
}

export default SimilarExercises