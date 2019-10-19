import React from "react";
import { withStyles } from "@material-ui/styles";

const ContactAddressComponentStyles = theme => {
    return {
        root: {

        }
    }
}

const ContactAddressComponent = ({ classes, className }) => {
    return (
        <div className={`${classes.root} ${className || ""}`}>
            ContactAddress
        </div>
    );
}

export default withStyles(ContactAddressComponentStyles)(ContactAddressComponent);