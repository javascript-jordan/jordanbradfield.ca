import React from "react";
import { withStyles } from "@material-ui/styles";

const AboutHobbiesComponentStyles = theme => {
    return {
        root: {

        }
    }
}

const AboutHobbiesComponent = ({ className, classes }) => {
    return (
        <div className={`${classes.root} ${className || ""}`}>
            AboutHobbies
        </div>
    );
}

export default withStyles(AboutHobbiesComponentStyles)(AboutHobbiesComponent);