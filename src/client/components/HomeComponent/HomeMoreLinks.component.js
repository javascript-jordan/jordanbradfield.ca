import React from "react";
import { withStyles, Paper, Typography } from "@material-ui/core";
import { strings } from "../../services/stringService";
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
                marginTop: theme.spacing(5),
                "& .link": {
                    padding: `0 ${theme.spacing(1)}`,
                    "& .paper": {
                        border: "none",
                        borderRadius: "2px",
                        boxShadow: theme.shadows[4],
                        padding: `0 ${theme.spacing(2)}`,
                        "& .link-title": {
                            padding: `${theme.spacing(2)} 0`,
                            "&>*": {
                                textTransform: "uppercase"
                            }
                        }
                    }
                }
            }
        }
    }
}

const HomeMoreLinksComponent = ({ className, classes }) => {
    let links = strings.home.links;
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
            <div className={`links flex row align-vertical-start`}>
                {links.items.map((link, index) => {
                    return (
                        <div className={`link grow shrink no-basis`} key={`link-${index}`}>
                            <Paper className={`paper`}>
                                <div className={`link-title`}>
                                    <Typography color="textSecondary" variant="subtitle1">
                                        {link.name}
                                    </Typography>
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