import React from "react";
import { withStyles } from "@material-ui/styles";
import TechnicalSkillsComponent from "./Technical/TechnicalSkills.component";
import KnowledgeSkillsComponent from "./Knowledge/KnowledgeSkills.component";
import config from "../../../../config";

const SkillsGraphsComponentStyles = theme => {
    return {
        root: {
            "&>*": {
                paddingBottom: theme.spacing(2),
                maxWidth: "50%",
                overflow: "visible hidden",
                "&:first-child": {
                    paddingRight: "10%"
                }
            },
            [theme.breakpoints.down(config.constants.mobileBreakpoint)]: {
                "&.root": {
                    flexDirection: "column",
                    "&>*": {
                        maxWidth: "100%",
                        overflow: "visible",
                        "&:first-child": {
                            paddingRight: 0
                        }
                    }
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