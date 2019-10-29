import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { strings } from "../../services/stringService";

const AboutGoalComponentStyles = theme => {
    return {
        root: {

        }
    }
}

const AboutGoalComponent = ({ className, classes, goal }) => {
    return (
        <div className={`${classes.root} ${className || ""} root`}>
            {goal.name}
        </div>
    );
}

export default withStyles(AboutGoalComponentStyles)(AboutGoalComponent);