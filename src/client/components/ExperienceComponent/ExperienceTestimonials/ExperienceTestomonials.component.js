import React, { useEffect, useRef } from "react";
import { withStyles } from "@material-ui/core";
import CarouselComponent from "../../Widgets/Carousel.component";

const ExperienceTestomonialsComponentStyles = theme => {
    return {
        root: {
            
        }
    }
}

const ExperienceTestomonialsComponent = ({ classes }) => {
    return (
        <div className={`${classes.root}`}>
            <CarouselComponent>
                <div className={`item-1`}>
                    Item 1
                </div>
                <div className={`item-2`}>
                    Item 2
                </div>
                <div className={`item-3`}>
                    Item 3
                </div>
            </CarouselComponent>
        </div>
    );
}

export default withStyles(ExperienceTestomonialsComponentStyles)(ExperienceTestomonialsComponent);