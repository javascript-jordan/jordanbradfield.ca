import React from "react";
import { withStyles } from "@material-ui/styles";


const DescriptionComponentStyles = theme => {
    return {
        root: {

        }
    }
}

const DescriptionComponent = ({ classes, className }) => {
    return (
        <div className={`${className || ""} ${classes.root}`}>

        </div>
    );
}

export default withStyles(DescriptionComponentStyles)(DescriptionComponent);