import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { strings } from "../../../../services/stringService";

const TechnicalSkillsComponentStyles = theme => {
    return {
        root: {

        }
    }
}

const TechnicalSkillsComponent = ({ classes, className }) => {
    return (
        <div className={`${classes.root} ${className || ""}`}>
            <div className={`title`}>
                <Typography className={`page-sub-title`} variant="h6">
                    {strings.skills.graphs.technical.title}
                </Typography>
            </div>
        </div>
    );
}

export default withStyles(TechnicalSkillsComponentStyles)(TechnicalSkillsComponent);