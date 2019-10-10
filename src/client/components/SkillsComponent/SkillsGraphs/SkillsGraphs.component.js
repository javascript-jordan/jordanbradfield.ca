import React from "react";
import { withStyles } from "@material-ui/styles";
import TechnicalSkillsComponent from "./Technical/TechnicalSkills.component";

const SkillsGraphsComponentStyles = theme => {
    return {
        root: {
            marginTop: theme.spacing(4)
        }
    }
}

const SkillsGraphsComponent = ({ classes, className }) => {
    return (
        <div className={`${classes.root} ${className || ""}`}>
            <TechnicalSkillsComponent />
        </div>
    );
}

export default withStyles(SkillsGraphsComponentStyles)(SkillsGraphsComponent);