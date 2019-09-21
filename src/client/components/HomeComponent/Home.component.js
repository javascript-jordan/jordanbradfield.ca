import React from "react";
import { withStyles, Typography, Paper } from "@material-ui/core";

const HomeComponentStyles = theme => ({
    root: {
        
    }
});

class HomeComponent extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        let { classes } = this.props;

        return (
            <div className={`${classes.root}`}>
                <Paper className={`paper-border-top`}>
                    <Typography color="textPrimary">Hello</Typography>
                </Paper>
            </div>
        )
    }
}

export default withStyles(HomeComponentStyles)(HomeComponent);