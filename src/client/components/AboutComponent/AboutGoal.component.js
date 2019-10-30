import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { strings } from "../../services/stringService";

const AboutGoalComponentStyles = theme => {
    return {
        root: {
            "&:not(:last-child)": {
                marginBottom: theme.spacing(2)
            },
            "& .circle-container": {
                borderRadius: "50%",
                boxShadow: theme.shadows[4],
                height: 80,
                width: 80,
                padding: theme.spacing(1),
                zIndex: 2,
                "& .inner-circle-container": {
                    backgroundColor: theme.palette.primary.main,
                    boxShadow: theme.shadows[2],
                    borderRadius: "50%",
                    height: "100%",
                    width: "100%",
                    "& img": {
                        width: "60%",
                        height: "60%"
                    }
                }
            },
            "& .goal-description-container": {
                boxShadow: theme.shadows[4],
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
                padding: theme.spacing(1),
                paddingLeft: theme.spacing(3),
                transform: "translateX(-8px)"
            },
            "&.not-acquired": {
                "& .circle-container": {
                    backgroundColor: "rgb(197, 197, 197)",
                    "& .inner-circle-container": {
                        backgroundColor: "rgba(0,0,0,0.2)",
                        "& img": {
                            opacity: "0.4"
                        }
                    }
                },
                "& .goal-description-container": {
                    backgroundColor: "rgb(197, 197, 197)",
                    "& .title, .date": {
                        color: "rgba(0, 0, 0, 0.26)"
                    }
                }
            }
        }
    }
}

const AboutGoalComponent = ({ className, classes, goal }) => {
    return (
        <div className={`${classes.root} ${className || ""} ${!goal.aquired ? "not-acquired" : ""} root flex row align-vertical-center`}>
            <div className={`circle-container background-white`}>
                <div className={`inner-circle-container flex row align-vertical-center align-horizontal-center`}>
                    <img src={goal.img} />
                </div>
            </div>
            <div className={`goal-description-container grow background-white`}>
                <div className={`title-date-container flex row align-horizontal-space-between align-vertical-center`}>
                    <div className={`title`}>
                        <Typography variant="h6">
                            {goal.name}
                        </Typography>
                    </div>
                    <div className={`date`}>
                        <Typography variant="subtitle2">
                            {goal.aquired ? (new Date(goal.aquired).toLocaleDateString()) : strings.about.goals.notAcquired}
                        </Typography>
                    </div>
                </div>
                <div className={`description`}>

                </div>
            </div>
        </div>
    );
}

export default withStyles(AboutGoalComponentStyles)(AboutGoalComponent);