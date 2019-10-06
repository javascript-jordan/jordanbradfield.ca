import React from "react";
import { withStyles, Typography, Paper } from "@material-ui/core";
import config from "../../../config";
import ExperienceTimelineComponent from "./ExperienceTimeline/ExperienceTimeline.component";
import ExperienceTestomonialsComponent from "./ExperienceTestimonials/ExperienceTestomonials.component";

const ExperienceComponentStyles = theme => ({
    root: {
        
    }
});

class ExperienceComponent extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        let { classes } = this.props;

        return (
            <div className={`${classes.root}`}>
                <ExperienceTimelineComponent />
                <ExperienceTestomonialsComponent />
            </div>
        )
    }
}

export default withStyles(ExperienceComponentStyles)(ExperienceComponent);