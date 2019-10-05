import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { strings } from "../../../services/stringService";
import config from "../../../../config";

const DateComponentStyles = theme => {
    let padding = theme.spacing(1);
    return {
        root: {
            boxShadow: theme.shadows[4],
            flexBasis: "30%",
            height: "fit-content",
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            maxWidth: "250px",
            "& .dates": {
                backgroundColor: theme.palette.primary.main,
                "& .date": {
                    padding,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    position: "relative",
                    "&:after": {
                        content: "' '",
                        position: "absolute",
                        width: 0,
                        height: 0,
                        left: "auto",
                        right: "-20px",
                        top: "0px",
                        bottom: "auto",
                        border: "20px solid",
                        borderColor: `${theme.palette.primary.main} transparent transparent transparent`,
                        marginRight: theme.spacing(1)
                    }
                }
            },
            "& .company-name": {
                padding: `${theme.spacing(1.5)} ${padding}`,
                wordBreak: "break-word"
            },
            [theme.breakpoints.down(config.constants.mobileBreakpoint)]: {
                minWidth: "70%",
                marginBottom: 0,
                "&.root .dates": {
                    "& .date:after": {
                        left: "-20px",
                        right: "auto"
                    }
                }
            }
        }
    }
}

const DateComponent = ({ classes, className, role}) => {
    let companyName = role.company,
        startDate = new Date(role.start).getFullYear(),
        endDate = role.end ? new Date(role.end).getFullYear() : strings.experience.timeline.current;

    return (
        <div className={`${classes.root} ${className || ""} root background-white`}>
            <div className={`dates`}>
                <Typography className={`date center color-white`} variant="subtitle2">
                    {startDate}&nbsp;-&nbsp;{endDate}
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

export default withStyles(DateComponentStyles)(DateComponent);