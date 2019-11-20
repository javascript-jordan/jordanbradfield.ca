import React from "react";
import { withStyles } from "@material-ui/styles";
import JordanStandingTransparentLow from "../../images/about/jordan-standing.png";

const AboutImageComponentStyles = theme => {
    return {
        root: {
            marginBottom: theme.spacing(2),
            "& img": {
                filter: "brightness(0.95) contrast(0.9)",
                width: "100%"
            }
        }
    }
}

const AboutImageComponent = ({ className, classes }) => {
    return (
        <div className={`${classes.root} ${className || ""}`}>
            <img src={JordanStandingTransparentLow} />
        </div>
    );
}

export default withStyles(AboutImageComponentStyles)(AboutImageComponent);