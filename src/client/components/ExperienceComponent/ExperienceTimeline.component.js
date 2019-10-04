import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography, Button } from "@material-ui/core";
import { strings } from "../../services/stringService";
import config from "../../../config";

const ExperienceTimelineComponentStyles = theme => {
    let sectionMarginTop = theme.spacing(4);
    return {
        root: {
            "& .timeline-title": {
                marginTop: sectionMarginTop
            },
            "& .timeline": {
                marginTop: sectionMarginTop
            }
        }
    }
}

const ExperienceTimelineComponent = ({ classes }) => {
    return (
        <div className={`${classes.root}`}>
            <div className={`timeline-title`}>
                <Typography className={`page-title`} color="textPrimary" variant="h4">
                    {strings.experience.timeline.title}
                </Typography>
            </div>
            <div className={`timeline`}>
                Timeline
            </div>
        </div>
    );
}

export default withStyles(ExperienceTimelineComponentStyles)(ExperienceTimelineComponent);