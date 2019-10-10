import React from "react";
import { withStyles } from "@material-ui/styles";

const SkillComponentStyles = theme => {
    return {
        root: {

        }
    }
}

const SkillComponent = ({ classes, className }) => {
    return (
        <div className={`${classes.root} ${className || ""}`}>

        </div>
    );
}

export default withStyles(SkillComponentStyles)(SkillComponent);