import React from "react";
import { withStyles } from "@material-ui/core";

const TestomonialComponentStyles = theme => {
    return {
        root: {
            
        }
    }
}

const TestomonialComponent = ({ classes }) => {
    return (
        <div className={`${classes.root}`}>

        </div>
    );
}

export default withStyles(TestomonialComponentStyles)(TestomonialComponent);