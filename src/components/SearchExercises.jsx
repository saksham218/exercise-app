import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography, TextField, Button } from '@mui/material'
import { exerciseOptions, fetchData } from "../utils/fetchData"
import HorizontalScrollBar from './HorizontalScrollBar'


const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchBodyParts = async () => {
            const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions)
            setBodyParts(bodyPartsData);
        }
        fetchBodyParts();
    }, [])

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            console.log(exercisesData)
            const searchedExercises = exercisesData.filter(
                (exercise) =>
                    //returns true if name, target muscle, body part or eqipment matches with the search query
                    exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
            )
            setSearch("");
            setExercises(searchedExercises);
        }
    }

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography fontWeight={700} sx={{ fontSize: { lg: "44px", xs: "30px" } }} mb="50px" textAlign="center">
                Awesome Exercise You<br />
                Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField sx={{ input: { fontWeight: "700", border: "none", borderRadius: "4px" }, width: { lg: "800px", xs: "350p" }, backgroundColor: "#fff", borderRadius: "40px" }} height="76px" value={search} onChange={(e) => { setSearch(e.target.value.toLowerCase()) }} placeholder="Search Exercise" type="text" />
                <Button className="search-btn" sx={{ bgcolor: "#FF2625", color: "#fff", textTransform: "none", width: { lg: "175px", xs: "100px" }, height: "56px", position: "absolute", right: "0" }} onClick={handleSearch}>
                    Search
                </Button>
            </Box>
            <Box sx={{ position: "realtive", width: "100%", p: "20px" }}>
                <HorizontalScrollBar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} isBodyParts />
            </Box>
        </Stack>
    )
}

export default SearchExercises