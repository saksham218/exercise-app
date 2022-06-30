import React, { useContext } from 'react'
import { Box, Typography } from "@mui/material"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"

import ExerciseCard from './ExerciseCard'
import BodyPartCard from "./BodyPartCard"
import RightArrowIcon from "../assets/icons/right-arrow.png"
import LeftArrowIcon from "../assets/icons/left-arrow.png"


const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography sx={{ opacity: isFirstItemVisible ? "0" : "1" }} onClick={() => scrollPrev()} className="left-arrow">
            <img src={LeftArrowIcon} alt="left-arrow" />
        </Typography>
    )
}


const RightArrow = () => {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

    return (
        <Typography sx={{ opacity: isLastItemVisible ? "0" : "1" }} onClick={() => scrollNext()} className="right-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    )
}

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
    console.log(data);
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item) => (
                <Box key={item.id || item} itemId={item.id || item} title={item.id || item} m="0 40px">
                    {isBodyParts ? <BodyPartCard item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> : <ExerciseCard exercise={item} />}
                </Box>))
            }
        </ScrollMenu>
    )
}

export default HorizontalScrollBar