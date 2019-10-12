import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography, Button } from "@material-ui/core";
import DateComponent from "./Date.component";
import { strings } from "../../../services/stringService";
import config from "../../../../config";
import IconLineComponent from "./IconLine.component";
import DescriptionComponent from "./Description.component";

const ROLES = strings.experience.timeline.roles;

const ExperienceTimelineComponentStyles = theme => {
    return {
        "@keyframes fadeIn": {
            from: {opacity: "0", transform: "translateY(100vh)"},
            to: {opacity: "1", transform: "translateY(0%)"}
        },
        root: {
            "& .timeline": {
                "& .job-row": {
                    animation: "$fadeIn 750ms linear forwards",
                    marginBottom: theme.spacing(2),
                    opacity: 0,
                    "& .desktop-view": {

                    },
                    "& .mobile-view": {
                        display: "none",
                        "& .date-description": {
                            alignItems: "flex-end",
                            height: "fit-content"
                        }
                    }
                }
            },
            [theme.breakpoints.down(config.constants.mobileBreakpoint)]: {
                "&.root .timeline": {
                    "& .job-row": {
                        "& .desktop-view": {
                            display: "none"
                        },
                        "& .mobile-view": {
                            display: "flex"
                        }
                    }
                }
            }
        }
    }
}

const ExperienceTimelineComponent = ({ classes }) => {
    function DesktopView({ className, delay, role, last }){
        return (
            <div className={`${className} flex row`}>
                <DateComponent role={role} />
                <IconLineComponent delay={delay} role={role} last={last} />
                <DescriptionComponent className={`grow`} role={role} />
            </div>
        )
    }
    function MobileView({ className, delay, role, last }){
        return (
            <div className={`${className} flex row`}>
                <IconLineComponent delay={delay} role={role} last={last} />
                <div className={`date-description flex column grow`}>
                    <DateComponent role={role} />
                    <DescriptionComponent role={role} />
                </div>
            </div>
        );
    }
    return (
        <div className={`${classes.root} root`}>
            <div className={`timeline-title`}>
                <Typography className={`page-title page-title-spacing`} color="textPrimary" variant="h6">
                    {strings.experience.timeline.title}
                </Typography>
            </div>
            <div className={`timeline`}>
                {ROLES.map((role, index) => {
                    let delay = 100 * index;
                    return (
                        <div className={`job-row`} key={`job-${index}`} style={{animationDelay: `${delay}ms`}}>
                            <DesktopView className={`desktop-view`} delay={delay + 750} role={role} last={index + 1 === ROLES.length} />
                            <MobileView className={`mobile-view`} delay={delay + 750} role={role} last={index + 1 === ROLES.length} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default withStyles(ExperienceTimelineComponentStyles)(ExperienceTimelineComponent);