import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { strings } from "../../../../services/stringService";

const KnowledgeSkillsComponentStyles = theme => {
    return {
        root: {

        }
    }
}

const KnowledgeSkillsComponent = ({ classes, className }) => {
    return (
        <div className={`${classes.root} ${className || ""}`}>
            <Typography className={`page-sub-title`} variant="h6">
                {strings.skills.graphs.knowledge.title}
            </Typography>
        </div>
    );
}

export default withStyles(KnowledgeSkillsComponentStyles)(KnowledgeSkillsComponent);