import React from "react";
import { withStyles, Paper, Typography } from "@material-ui/core";
import { strings } from "../../services/stringService";
import config from "../../../config";

const HomeMarketingComponentStyles = theme => {
    return {
        root: {
            backgroundColor: "#efefef",
            margin: `0 -${theme.spacing(1)}`,
            "& .main-title": {
                padding: theme.spacing(2),
                "&>*": {
                    textTransform: "uppercase"
                }
            },
            "& .main-description": {
                maxWidth: "75%",
                margin: "auto"
            },
            "& .marketing-list": {
                flexFlow: "row wrap",
                maxWidth: "75%",
                margin: "auto",
                padding: `${theme.spacing(9)}px ${theme.spacing(2)}`,
                paddingBottom: theme.spacing(8),
                "& .marketing-item": {
                    textAlign: "left",
                    padding: `0 ${theme.spacing(1)}`,
                    "& .paper": {
                        border: "none",
                        borderRadius: "2px",
                        boxShadow: theme.shadows[4],
                        padding: `0 ${theme.spacing(2)}`,
                        height: 200,
                        "& .image-container": {
                            height: theme.spacing(4),
                            "& .image-wrapper": {
                                boxShadow: theme.shadows[2],
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
                }
            },
            [theme.breakpoints.down(1500)]: {
                "&.root .marketing-list .marketing-item .paper": {
                    height: 300
                }
            },
            [theme.breakpoints.down("sm")]: {
                "&.root .marketing-list .marketing-item .paper": {
                    height: 360
                }
            },
            [theme.breakpoints.down(config.constants.mobileBreakpoint)]: {
                "&.root": {
                    "& .main-description": {
                        maxWidth: "95%"
                    },
                    "& .marketing-list": {
                        flexDirection: "column",
                        maxWidth: "100%",
                        "& .marketing-item": {
                            width: "100%",
                            "& .paper": {
                                height: 220
                            },
                            "&:not(:last-child)": {
                                marginBottom: theme.spacing(9)
                            }
                        }
                    }
                }
            },
            [theme.breakpoints.down(430)]: {
                "&.root .marketing-list .marketing-item .paper": {
                    height: 270
                }
            }
        }
    }
}

const HomeMarketingComponent = ({ className, classes }) => {
    let marketing = strings.home.marketing;
    return (
        <div className={`${classes.root} ${className || ""} root`}>
            <div className={`main-title`}>
                <Typography className={`page-title`} color="textPrimary" variant="h6">
                    {marketing.title}
                </Typography>
            </div>
            <div className={`main-description`}>
                <Typography color="textSecondary" variant="body2">
                    {marketing.description}
                </Typography>
            </div>
            <div className={`marketing-list flex row align-vertical-start align-horizontal-center`}>
                {marketing.items.map((item, index) => {
                    return (
                        <div className={`marketing-item grow shrink no-basis`} key={`marketing-${index}`}>
                            <Paper className={`paper flex column align-horizontal-evenly`}>
                                <div className={`image-container`}>
                                    <div className={`image-wrapper`}>
                                        <img src={item.image} />
                                    </div>
                                </div>
                                <div className={`title-description flex column`}>
                                    <div className={`title`}>
                                        <Typography color="textSecondary" variant="subtitle1">
                                            {item.title}
                                        </Typography>
                                    </div>
                                    <div className={`description grow flex row align-vertical-center`}>
                                        <Typography color="textSecondary" component="p" variant="body2">
                                            {item.description}
                                        </Typography>
                                    </div>
                                </div>
                            </Paper>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default withStyles(HomeMarketingComponentStyles)(HomeMarketingComponent);