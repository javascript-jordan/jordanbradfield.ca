import React from "react";
import { withStyles } from "@material-ui/styles";

const KnowledgeSkillsComponentStyles = theme => {
    return {
        root: {

        }
    }
}

const KnowledgeSkillsComponent = ({ classes, className }) => {
    return (
        <div className={`${classes.root} ${className || ""}`}>

        </div>
    );
}

export default withStyles(KnowledgeSkillsComponentStyles)(KnowledgeSkillsComponent);