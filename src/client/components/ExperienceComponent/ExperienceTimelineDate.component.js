import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { strings } from "../../services/stringService";

const ExperienceTimelineDateComponentStyles = theme => {
    let padding = `${theme.spacing(0.5)} ${theme.spacing(1)}`;
    return {
        root: {
            boxShadow: theme.shadows[4],
            flexBasis: "30%",
            "& .dates": {
                backgroundColor: theme.palette.primary.main,
                "& .date": {
                    padding,
                    fontWeight: 600,
                    textTransform: "uppercase"
                },
                "& .company-name": {
                    padding,
                    wordBreak: "break-word"
                }
            }
        }
    }
}

const ExperienceTimelineDateComponent = ({ classes, className, startDate, endDate, companyName }) => {
    return (
        <div className={`${classes.root} ${className || ""} background-white`}>
            <div className={`dates`}>
                <Typography className={`date center color-white`} variant="subtitle2">
                    {startDate.getFullYear()}&nbsp;-&nbsp;{endDate ? endDate.getFullYear() : strings.experience.timeline.current}
                </Typography>
            </div>
            <div className={`company-name center`}>
                <Typography variant="h6">
                    {companyName}
                </Typography>
            </div>
        </div>
    );
}

export default withStyles(ExperienceTimelineDateComponentStyles)(ExperienceTimelineDateComponent);