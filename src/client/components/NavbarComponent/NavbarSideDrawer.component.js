import React from "react";
import { withStyles } from "@material-ui/styles";
import { Drawer } from "@material-ui/core";

const NavbarSideDrawerStyles = theme => ({
    root: {
        "& .header": {
            backgroundColor: theme.palette.primary.main,
            padding: theme.spacing(1)
        }
    }
});

const NavbarSideDrawerComponent = ({ classes, open, onDrawerClose }) => {

    return (
        <Drawer className={`${classes.root}`} open={open} onClose={onDrawerClose}>
            <div className={`header`}>
                Header
            </div>
            <div className={`navitems`}>

            </div>
        </Drawer>
    );
}

export default withStyles(NavbarSideDrawerStyles)(NavbarSideDrawerComponent);