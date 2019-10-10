import React, { useEffect, useRef } from "react";
import { Typography, withStyles } from "@material-ui/core";
import CarouselComponent from "../../Widgets/Carousel.component";
import TestimonialComponent from "./Testimonial.component";
import { strings } from "../../../services/stringService";
import config from "../../../../config";

const ExperienceTestimonialsComponentStyles = theme => {
    return {
        root: {
            "& .title": {
                margin: `${theme.spacing(8)} 0 ${theme.spacing(2)} 0`
            },
            "& .testimonials": {
                maxWidth: 1000,
                margin: "auto",
            }
        }
    }
}

const ExperienceTestimonialsComponent = ({ classes }) => {
    return (
        <div className={`${classes.root}`}>
            <div className={`title`}>
                <Typography className={`page-title`} color="textPrimary" variant="h6">
                    {strings.experience.testimonials.title}
                </Typography>
            </div>
            <div className={`testimonials`}>
                <CarouselComponent>
                    {strings.experience.testimonials.reviews.map((testimonial, index) => {
                        return <TestimonialComponent testimonial={testimonial} key={`testimonial-${index}`} />
                    })}
                </CarouselComponent>
            </div>
        </div>
    );
}

export default withStyles(ExperienceTestimonialsComponentStyles)(ExperienceTestimonialsComponent);