import React, { Fragment } from "react";
import { withStyles } from "@material-ui/styles";
import { Typography, Paper, Divider } from "@material-ui/core";
import { strings } from "../../services/stringService";
import AboutUpdateComponent from "./AboutUpdate.component";

const AboutUpdatesComponentStyles = theme => {
    return {
        root: {
            "& .page-sub-title": {
                margin: `${theme.spacing(2)} 0`
            },
            "& .updates-list": {
                maxHeight: 600,
                overflowY: "auto",
                padding: theme.spacing(1),
                "& .divider": {
                    marginTop: theme.spacing(1),
                    marginBottom: theme.spacing(2)
                }
            }
        }
    }
}

const AboutUpdatesComponent = ({ className, classes }) => {
    let updates = strings.about.updates;
    return (
        <div className={`${classes.root} ${className || ""} root`}>
            <Typography className={`page-sub-title`} variant="h6">
                {updates.title}
            </Typography>
            <Paper className={`updates-list`}>
                {updates.list.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1)).map((update, index) => {
                    return (
                        <Fragment>
                            <AboutUpdateComponent className={`update`} update={update} key={`update-${index}`} />
                            {index + 1 !== updates.list.length && <Divider className={`divider`} />}
                        </Fragment>
                    )
                })}
            </Paper>
        </div>
    );
}

export default withStyles(AboutUpdatesComponentStyles)(AboutUpdatesComponent);