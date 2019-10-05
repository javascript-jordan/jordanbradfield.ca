import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import config from "../../../../config";

const DescriptionComponentStyles = theme => {
    return {
        root: {
            boxShadow: theme.shadows[6],
            flexBasis: "70%",
            padding: `${theme.spacing(2.5)} ${theme.spacing(3.5)}`,
            marginTop: theme.spacing(3),
            position: "relative",
            "& .role": {
                marginBottom: theme.spacing(2),
                position: "relative",
                "&:after": {
                    content: "' '",
                    position: "absolute",
                    width: 0,
                    height: 0,
                    left: "-48px",
                    right: "auto",
                    top: theme.spacing(-2.5),
                    bottom: "auto",
                    border: "20px solid",
                    borderColor: `#ffffff transparent transparent transparent`,
                },
                "& .title": {
                    fontWeight: "bold",
                    textTransform: "uppercase"
                }
            },
            [theme.breakpoints.down(config.constants.mobileBreakpoint)]: {
                "&.root": {
                    padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
                    "& .role": {
                        marginBottom: theme.spacing(1),
                        "&:after": {
                            border: "12px solid",
                            top: "100%",
                            right: "auto",
                            left: "-28",
                            borderColor: `#ffffff #ffffff transparent transparent`
                        }
                    }
                }
            }
        }
    }
}

const DescriptionComponent = ({ classes, className, role }) => {
    return (
        <div className={`${className || ""} ${classes.root} root background-white`}>
            <div className={`role`}>
                <Typography className={`title`} variant="subtitle1">
                    {role.role}
                </Typography>
            </div>
            <div className={`description`}>
                <Typography className={`content`} variant="body2" color="textSecondary">
                    {role.description}
                </Typography>
            </div>
        </div>
    );
}

export default withStyles(DescriptionComponentStyles)(DescriptionComponent);