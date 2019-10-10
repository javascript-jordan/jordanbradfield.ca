import React from "react";
import { withStyles } from "@material-ui/styles";

const BarComponentStyles = theme => {
    return {
        root: {

        }
    }
}

const BarComponent = ({ classes, className }) => {
    return (
        <div className={`${classes.root} ${className || ""}`}>

        </div>
    );
}

export default withStyles(BarComponentStyles)(BarComponent);