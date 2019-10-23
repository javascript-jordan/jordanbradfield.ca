import React from "react";
import { withStyles, Typography, Paper } from "@material-ui/core";
import { xhr } from "../../../utils/util";
import config from "../../../config";

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
                <Typography className={`page-title page-title-spacing`} color="textPrimary" variant="h6">About</Typography>
            </div>
        )
    }
}

export default withStyles(AboutComponentStyles)(AboutComponent);