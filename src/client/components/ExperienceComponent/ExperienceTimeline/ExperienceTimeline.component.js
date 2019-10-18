import React, { useState } from "react";
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
                    "&:not(.all)": {
                        animation: "$fadeIn 750ms linear forwards",
                        opacity: 0
                    },
                    marginBottom: theme.spacing(2),
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
            "& .see-more-button": {
                animation: "FadeInAnimation 750ms linear 1s forwards",
                marginTop: theme.spacing(4),
                opacity: 0
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
    
    let [state, setState] = useState({all: ROLES.length <= 3, roles: [...ROLES].slice(0, 3)});

    function DesktopView({ className, delay, role, last }){
        return (
            <div className={`${className} flex row`}>
                <DateComponent role={role} />
                <IconLineComponent all={state.all} delay={delay} role={role} last={last} />
                <DescriptionComponent className={`grow`} role={role} />
            </div>
        )
    }

    function MobileView({ className, delay, role, last }){
        return (
            <div className={`${className} flex row`}>
                <IconLineComponent all={state.all} delay={delay} role={role} last={last} />
                <div className={`date-description flex column grow`}>
                    <DateComponent role={role} />
                    <DescriptionComponent role={role} />
                </div>
            </div>
        );
    }

    function SeeMoreButton(){
        if(!state.all){
            return (
                <div className={`see-more-button flex row align-horizontal-center`}>
                    <Button color="primary" variant="outlined" onClick={() => onSeeMoreClick()}>
                        See More
                    </Button>
                </div>
            );
        }
        return null;
    }

    function onSeeMoreClick(){
        setState(() => {
            return {
                all: true,
                roles: [...ROLES]
            }
        });
    }

    return (
        <div className={`${classes.root} root`}>
            <div className={`timeline-title`}>
                <Typography className={`page-title page-title-spacing`} color="textPrimary" variant="h6">
                    {strings.experience.timeline.title}
                </Typography>
            </div>
            <div className={`timeline`}>
                {state.roles.map((role, index) => {
                    let delay = 100 * index;
                    return (
                        <div className={`job-row ${state.all ? "all" : ""}`} key={`job-${index}`} style={{animationDelay: `${delay}ms`}}>
                            <DesktopView className={`desktop-view`} delay={delay + 750} role={role} last={index + 1 === state.roles.length} />
                            <MobileView className={`mobile-view`} delay={delay + 750} role={role} last={index + 1 === state.roles.length} />
                        </div>
                    );
                })}
            </div>
            <SeeMoreButton />
        </div>
    );
}

export default withStyles(ExperienceTimelineComponentStyles)(ExperienceTimelineComponent);