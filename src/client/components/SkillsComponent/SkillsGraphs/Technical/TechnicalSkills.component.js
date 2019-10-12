import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import BarComponent from "./Bar.component";
import { strings } from "../../../../services/stringService";
import config from "../../../../../config";

const TechnicalSkillsComponentStyles = theme => {
    return {
        root: {
            paddingRight: theme.spacing(3.5),
            [theme.breakpoints.down(config.constants.mobileBreakpoint)]: {
                paddingRight: 0
            }
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
            <div className={`skills-list`}>
                {strings.skills.graphs.technical.list.map((skill, index) => {
                    return <BarComponent key={`skill-${index}`} skill={skill} index={index}></BarComponent>;
                })}
            </div>
        </div>
    );
}

export default withStyles(TechnicalSkillsComponentStyles)(TechnicalSkillsComponent);