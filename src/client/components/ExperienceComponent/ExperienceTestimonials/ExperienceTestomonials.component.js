import React, { useEffect, useRef } from "react";
import { Typography, withStyles } from "@material-ui/core";
import CarouselComponent from "../../Widgets/Carousel.component";
import TestomonialComponent from "./Testomonial.component";
import { strings } from "../../../services/stringService";
import config from "../../../../config";

const ExperienceTestomonialsComponentStyles = theme => {
    return {
        root: {
            "& .title": {
                margin: `${theme.spacing(8)} 0 ${theme.spacing(2)} 0`
            },
            "& .testomonials": {
                maxWidth: 1000,
                margin: "auto",
            }
        }
    }
}

const ExperienceTestomonialsComponent = ({ classes }) => {
    return (
        <div className={`${classes.root}`}>
            <div className={`title`}>
                <Typography className={`page-title`} color="textPrimary" variant="h6">
                    {strings.experience.testomonials.title}
                </Typography>
            </div>
            <div className={`testomonials`}>
                <CarouselComponent>
                    {strings.experience.testomonials.reviews.map((testomonial, index) => {
                        return <TestomonialComponent testomonial={testomonial} key={`testomonial-${index}`} />
                    })}
                </CarouselComponent>
            </div>
        </div>
    );
}

export default withStyles(ExperienceTestomonialsComponentStyles)(ExperienceTestomonialsComponent);