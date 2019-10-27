import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography, Paper } from "@material-ui/core";
import { strings } from "../../services/stringService";

const AboutBioComponentStyles = theme => {
    return {
        root: {
            paddingLeft: theme.spacing(2),
            "& .description": {
                margin: `${theme.spacing(3)} 0`
            },
            "& .info-list": {
                "& .info-point": {
                    textTransform: "uppercase",
                    "& .value": {
                        marginLeft: theme.spacing(1)
                    },
                    "&:not(:last-child)": {
                        marginBottom: theme.spacing(1)
                    }
                }
            }
        }
    }
}

function InfoPoint({ point }){
    return (
        <div className={`info-point flex row`}>
            <Typography color="textSecondary" className={`key`}>
                <b>{point.key}:</b>
            </Typography>
            <Typography color="textSecondary" className={`value`}>
                {point.value}
            </Typography>
        </div>
    );
}

const AboutBioComponent = ({ className, classes }) => {
    return (
        <div className={`${classes.root} ${className || ""}`}>
            <Typography className={`page-sub-title`} variant="h6">
                {strings.about.bio.title}
            </Typography>
            <div className={`description`}>
                <Paper>
                    <Typography color="textSecondary" className={`paper`} variant="body2">
                        {strings.about.bio.description}
                    </Typography>
                </Paper>
            </div>
            <div className={`info-list`}>
                {strings.about.bio.infoPoints.map((point, index) => {
                    return <InfoPoint key={`info-point-${index}`} point={point} />;
                })}
            </div>
        </div>
    );
}

export default withStyles(AboutBioComponentStyles)(AboutBioComponent);