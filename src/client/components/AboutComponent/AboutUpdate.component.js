import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import JordanHeadshot from "../../images/home/jordan-headshot-low.png";

const AboutUpdateComponentStyles = theme => {
    return {
        root: {
            "& .picture-status-container": {
                marginBottom: theme.spacing(1),
                "& .picture": {
                    backgroundColor: "#e0e0e0",
                    boxShadow: theme.shadows[1],
                    marginRight: theme.spacing(1.5),
                    "& img": {
                        width: "40",
                        height: "auto"
                    }
                },
                "& *": {
                    borderRadius: "50%"
                }
            }
        }
    }
}

const AboutUpdateComponent = ({ className, classes, update }) => {
    return (
        <div className={`${classes.root} ${className || ""} root`}>
            <div className={`picture-status-container flex row align-vertical-start`}>
                <div className={`picture`}>
                    <img aria-hidden="true" src={JordanHeadshot} />
                </div>
                <div className={`status`}>
                    <Typography color="textSecondary" variant="body1">
                        {update.description}
                    </Typography>
                </div>
            </div>
            <div className={`date-container`}>
                <Typography color="textPrimary" variant="subtitle2">
                    {new Date(update.date).toDateString()}
                </Typography>
            </div>
        </div>
    );
}

export default withStyles(AboutUpdateComponentStyles)(AboutUpdateComponent);