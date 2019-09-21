import React from "react";
import { withStyles, Typography } from "@material-ui/core";

const NavbarComponentStyles = theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        boxShadow: theme.shadows[8]
    }
});

class NavbarComponent extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        let { classes } = this.props;
        return (
            <nav className={classes.root}>
                <Typography>Jordan Bradfield</Typography>
            </nav>
        )
    }
}

export default withStyles(NavbarComponentStyles)(NavbarComponent);