import React from "react";
import { withStyles, Paper, Typography, Link } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import { strings } from "../../services/stringService";
import { route } from "../../services/routingService";
import config from "../../../config";

const HomeMoreLinksComponentStyles = theme => {
    return {
        root: {
            "& .title": {
                padding: theme.spacing(2)
            },
            "& .description": {
                maxWidth: "75%",
                margin: "auto"
            },
            "& .links": {
                flexFlow: "row wrap",
                margin: "auto",
                marginTop: theme.spacing(5),
                maxWidth: "75%",
                "& .link": {
                    height: 375,
                    padding: `0 ${theme.spacing(1)}`,
                    width: 200,
                    marginBottom: theme.spacing(2),
                    "& .paper": {
                        border: "none",
                        borderRadius: "2px",
                        boxShadow: theme.shadows[4],
                        height: "100%",
                        padding: `0 ${theme.spacing(2)}`,
                        "& .link-image": {
                            "& img": {
                                marginTop: theme.spacing(2),
                                width: 50,
                                height: 50
                            }
                        },
                        "& .link-title": {
                            padding: `${theme.spacing(2)} 0`,
                            "&>*": {
                                textTransform: "uppercase"
                            }
                        },
                        "& .link-description": {
                            paddingBottom: theme.spacing(2)
                        },
                        "& .link-see-more": {
                            cursor: "pointer",
                            paddingBottom: theme.spacing(2),
                            "& svg": {
                                marginRight: theme.spacing(1)
                            }
                        }
                    }
                }
            },
            [theme.breakpoints.down(400)]: {
                "&.root .links": {
                    "& .link": {
                        width: "100%"
                    }
                }
            }
        }
    }
}

const HomeMoreLinksComponent = ({ className, classes }) => {
    let links = strings.home.links;

    function onLinkClick(item){
        route(item.link);
    }

    return (
        <div className={`${classes.root} ${className || ""} root`}>
            <div className={`title`}>
                <Typography className={`page-title`} color="textPrimary" variant="h6">
                    {links.title}
                </Typography>
            </div>
            <div className={`description`}>
                <Typography color="textSecondary" variant="body2">
                    {links.description}
                </Typography>
            </div>
            <div className={`links flex row align-vertical-start align-horizontal-center`}>
                {links.items.map((link, index) => {
                    return (
                        <div className={`link`} key={`link-${index}`}>
                            <Paper className={`paper flex column`}>
                                <div className={`link-image`}>
                                    <img aria-hidden="ture" src={link.img} />
                                </div>
                                <div className={`link-title`}>
                                    <Typography color="textSecondary" variant="subtitle1">
                                        {link.name}
                                    </Typography>
                                </div>
                                <div className={`link-description grow`}>
                                    <Typography color="textSecondary" variant="body2">
                                        {link.description}
                                    </Typography>
                                </div>
                                <div className={`link-see-more`}>
                                    <Link className={`flex row align-vertical-center align-horizontal-center`} onClick={onLinkClick.bind(null, link)}>
                                        <ArrowForward />
                                        <Typography>{links.seeMore}</Typography>
                                    </Link>
                                </div>
                            </Paper>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default withStyles(HomeMoreLinksComponentStyles)(HomeMoreLinksComponent);