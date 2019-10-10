import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const TechnicalSkillsComponentStyles = theme => {
    return {
        root: {

        }
    }
}

const TechnicalSkillsComponent = ({ classes, className }) => {
    return (
        <div className={`${classes.root} ${className || ""}`}>
            <Typography className={`page-title`} variant="h6">
                Skills Repository
            </Typography>
        </div>
    );
}

export default withStyles(TechnicalSkillsComponentStyles)(TechnicalSkillsComponent);