import React, { Fragment } from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { strings } from "../../services/stringService";
import AboutGoalComponent from "./AboutGoal.component";
import { ArrowForward, ArrowForwardIos } from "@material-ui/icons";

const AboutGoalsComponentStyles = theme => {
    return {
        root: {
            "& .page-sub-title": {
                margin: `${theme.spacing(2)} 0`
            },
            "& .goal-list": {
                "& .next-indicator": {
                    "&.disabled > svg": {
                        color: "rgb(197, 197, 197)"
                    },
                    "&.hide": {
                        display: "none"
                    },
                    "& > svg": {
                        transform: "rotate(90deg)"
                    }
                }
            }
        }
    }
}

const AboutGoalsComponent = ({ className, classes }) => {
    let goals = strings.about.goals.list;
    return (
        <div className={`${classes.root} ${className || ""} root`}>
            <Typography className={`page-sub-title`} variant="h6">
                {strings.about.goals.title}
            </Typography>
            <div className={`goal-list`}>
                {goals.map((goal, index) => {
                    return (
                        <Fragment key={`goal-${index}`}>
                            <AboutGoalComponent goal={goal}/>
                            <div className={`next-indicator ${!(goals[index + 1] && goals[index + 1].aquired) ? "disabled" : ""} ${index + 1 === goals.length ? "hide" : ""} flex column align-vertical-center align-horizontal-center`}>
                                <ArrowForwardIos color="primary" fontSize="large" />
                            </div>
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
}

export default withStyles(AboutGoalsComponentStyles)(AboutGoalsComponent);