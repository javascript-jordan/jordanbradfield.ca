import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { strings } from "../../services/stringService";
import AboutGoalComponent from "./AboutGoal.component";

const AboutGoalsComponentStyles = theme => {
    return {
        root: {
            "& .page-sub-title": {
                margin: `${theme.spacing(2)} 0`
            }
        }
    }
}

const AboutGoalsComponent = ({ className, classes }) => {
    return (
        <div className={`${classes.root} ${className || ""} root`}>
            <Typography className={`page-sub-title`} variant="h6">
                {strings.about.goals.title}
            </Typography>
            <div className={`goal-list`}>
                {strings.about.goals.list.map((goal, index) => <AboutGoalComponent goal={goal} key={`goal-${index}`} />)}
            </div>
        </div>
    );
}

export default withStyles(AboutGoalsComponentStyles)(AboutGoalsComponent);