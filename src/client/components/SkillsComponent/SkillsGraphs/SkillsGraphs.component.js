import React from "react";
import { withStyles } from "@material-ui/styles";
import TechnicalSkillsComponent from "./Technical/TechnicalSkills.component";
import KnowledgeSkillsComponent from "./Knowledge/KnowledgeSkills.component";
import config from "../../../../config";

const SkillsGraphsComponentStyles = theme => {
    return {
        root: {
            "&>*": {
                marginBottom: theme.spacing(2)
            },
            [theme.breakpoints.down(config.constants.mobileBreakpoint)]: {
                "&.root": {
                    flexDirection: "column"
                }
            }
        }
    }
}

const SkillsGraphsComponent = ({ classes, className }) => {
    return (
        <div className={`${classes.root} ${className || ""} root flex row`}>
            <TechnicalSkillsComponent className={`grow shrink no-basis`} />
            <KnowledgeSkillsComponent className={`grow shrink no-basis`} />
        </div>
    );
}

export default withStyles(SkillsGraphsComponentStyles)(SkillsGraphsComponent);