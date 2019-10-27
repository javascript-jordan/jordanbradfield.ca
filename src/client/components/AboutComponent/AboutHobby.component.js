import React from "react";
import { withStyles } from "@material-ui/styles";

const AboutHobbyComponentStyles = theme => {
    return {
        root: {

        }
    }
}

const AboutHobbyComponent = ({ className, classes }) => {
    return (
        <div className={`${classes.root} ${className || ""}`}>
            AboutHobby
        </div>
    );
}

export default withStyles(AboutHobbyComponentStyles)(AboutHobbyComponent);