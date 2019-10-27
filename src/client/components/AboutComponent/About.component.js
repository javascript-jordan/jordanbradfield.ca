import React from "react";
import { withStyles, Typography, Paper } from "@material-ui/core";
import { xhr } from "../../../utils/util";
import config from "../../../config";
import { strings } from "../../services/stringService";

const AboutComponentStyles = theme => ({
    root: {
        
    }
});

class AboutComponent extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        let { classes } = this.props;

        return (
            <div className={`${classes.root}`}>
                <Typography className={`page-title page-title-spacing`} color="textPrimary" variant="h6">{strings.about.title}</Typography>
            </div>
        )
    }
}

export default withStyles(AboutComponentStyles)(AboutComponent);