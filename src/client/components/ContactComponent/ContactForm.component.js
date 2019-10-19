import React from "react";
import { withStyles } from "@material-ui/styles";

const ContactFormComponentStyles = theme => {
    return {
        root: {

        }
    }
}

const ContactFormComponent = ({ classes, className }) => {
    return (
        <div className={`${classes.root} ${className || ""}`}>
            ContactForm
        </div>
    );
}

export default withStyles(ContactFormComponentStyles)(ContactFormComponent);