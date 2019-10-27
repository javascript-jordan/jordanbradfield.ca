import React from "react";
import { withStyles } from "@material-ui/styles";
import JordanTransparentLow from "../../images/home/jordan-transparent-low.png";

const AboutImageComponentStyles = theme => {
    return {
        root: {

        }
    }
}

const AboutImageComponent = ({ className, classes }) => {
    return (
        <div className={`${classes.root} ${className || ""}`}>
            <img src={JordanTransparentLow} />
        </div>
    );
}

export default withStyles(AboutImageComponentStyles)(AboutImageComponent);