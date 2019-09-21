import React from "react";
import { withStyles, Typography, AppBar } from "@material-ui/core";

const NavbarComponentStyles = theme => ({
    root: {
        "& .appbar": {
            padding: theme.spacing(1)
        }
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
                <AppBar className={`appbar`} position="relative">
                    <Typography className={`bold`} variant="h5">Jordan Bradfield</Typography>
                </AppBar>
            </nav>
        )
    }
}

export default withStyles(NavbarComponentStyles)(NavbarComponent);