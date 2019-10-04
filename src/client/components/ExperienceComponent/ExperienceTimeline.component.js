import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography, Button } from "@material-ui/core";
import ExperienceTimelineDateComponent from "./ExperienceTimelineDate.component";
import { strings } from "../../services/stringService";
import config from "../../../config";

const ROLES = strings.experience.timeline.roles;

const ExperienceTimelineComponentStyles = theme => {
    let sectionMarginTop = theme.spacing(4);
    return {
        root: {
            "& .timeline-title": {
                marginTop: sectionMarginTop
            },
            "& .timeline": {
                marginTop: sectionMarginTop,
                "& .job-row": {
                    marginBottom: theme.spacing(2)
                }
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
                {ROLES.map((role, index) => {
                    return (
                        <div className={`job-row flex row`} key={`job-${index}`} >
                            <ExperienceTimelineDateComponent 
                                companyName={role.company}
                                startDate={new Date(role.start)} 
                                endDate={role.end ? new Date(role.end) : null} />
                            <div className={`icon-line flex column`}>
                                <div className={`icon`}>

                                </div>
                                <div className={`line`}>

                                </div>
                            </div>
                            <div className={`description grow`}>

                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default withStyles(ExperienceTimelineComponentStyles)(ExperienceTimelineComponent);