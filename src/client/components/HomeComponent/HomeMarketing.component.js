import React from "react";
import { withStyles, Paper, Typography } from "@material-ui/core";
import { strings } from "../../services/stringService";
import config from "../../../config";

const HomeMarketingComponentStyles = theme => {
    return {
        root: {
            backgroundColor: "#efefef",
            flexFlow: "row wrap",
            margin: `0 -${theme.spacing(1)}`,
            padding: `${theme.spacing(3)}px ${theme.spacing(2)}`,
            paddingTop: theme.spacing(8),
            "& .marketing-item": {
                textAlign: "left",
                padding: `0 ${theme.spacing(1)}`,
                "& .paper": {
                    border: "none",
                    borderRadius: "2px",
                    padding: `0 ${theme.spacing(2)}`,
                    "& .image-container": {
                        height: theme.spacing(4),
                        "& .image-wrapper": {
                            boxShadow: theme.shadows[10],
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: "50%",
                            transform: `translateY(calc(-50% + -${theme.spacing(1)}px))`,
                            overflow: "hidden",
                            padding: theme.spacing(2),
                            height: 50,
                            width: 50,
                            "& img": {
                                width: "100%",
                                height: "100%"
                            }
                        }
                    },
                    "& .title": {
                        textTransform: "uppercase",
                        marginTop: theme.spacing(2)
                    },
                    "& .description": {
                        padding: `${theme.spacing(2)} 0`
                    }
                }
            },
            [theme.breakpoints.down(config.constants.mobileBreakpoint)]: {
                "&.root": {
                    flexDirection: "column",
                    "& .marketing-item": {
                        width: "100%",
                        "&:not(:last-child)": {
                            marginBottom: theme.spacing(9)
                        }
                    }
                }
            }
        }
    }
}

const HomeMarketingComponent = ({ className, classes }) => {
    let marketing = strings.home.marketing;
    return (
        <div className={`${classes.root} ${className || ""} root flex row align-vertical-start align-horizontal-center`}>
            {marketing.items.map((item, index) => {
                return (
                    <div className={`marketing-item grow shrink no-basis`} key={`marketing-${index}`}>
                        <Paper className={`paper`}>
                            <div className={`image-container`}>
                                <div className={`image-wrapper`}>
                                    <img src={item.image} />
                                </div>
                            </div>
                            <div className={`title`}>
                                <Typography color="textSecondary" variant="subtitle1">
                                    {item.title}
                                </Typography>
                            </div>
                            <div className={`description`}>
                                <Typography color="textSecondary" component="p" variant="body2">
                                    {item.description}
                                </Typography>
                            </div>
                        </Paper>
                    </div>
                );
            })}
        </div>
    );
}

export default withStyles(HomeMarketingComponentStyles)(HomeMarketingComponent);