import React from "react";
import { withStyles, Typography } from "@material-ui/core";

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
        return (
            <Typography color="textPrimary">Hello</Typography>
        )
    }
}

export default withStyles(HomeComponentStyles)(HomeComponent);