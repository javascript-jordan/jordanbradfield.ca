import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { strings } from "../../../services/stringService";
import ChartComponent from "./Chart.component";
import config from "../../../../config";

const SkillsChartsComponentStyles = theme => {
    return {
        root: {
            [theme.breakpoints.down(config.constants.mobileBreakpoint)]: {
                "& .charts-container": {
                    flexDirection: "column"
                }
            }
        }
    }
}

const SkillsChartsComponent = ({ classes, className }) => {
    return (
        <div className={`${classes.root} ${className || ""}`}>
            <div className={`title`}>
                <Typography className={`page-sub-title page-title-spacing`} variant="h6">
                    {strings.skills.charts.title}
                </Typography>
            </div>
            <div className={`charts-container flex row`}>
                {strings.skills.charts.list.map((chart, index) => {
                    return <ChartComponent className={`grow shrink no-basis`} chart={chart} key={`chart-${index}`}></ChartComponent>;
                })}
            </div>
        </div>
    );
}

export default withStyles(SkillsChartsComponentStyles)(SkillsChartsComponent);