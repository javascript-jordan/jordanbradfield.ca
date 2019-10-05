import React from "react";
import { withStyles } from "@material-ui/styles";


const IconLineComponentStyles = theme => {
    return {
        root: {

        }
    }
}

const IconLineComponent = ({ classes, className }) => {
    return (
        <div className={`${className || ""} ${classes.root}`}>

        </div>
    );
}

export default withStyles(IconLineComponentStyles)(IconLineComponent);