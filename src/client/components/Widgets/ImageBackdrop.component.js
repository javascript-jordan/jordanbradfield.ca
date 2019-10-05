import React from "react";
import { withStyles, withTheme, getThemeProps } from "@material-ui/styles";

const ImageBackdropComponentStyles = theme => {
    return {
        root: {
            backgroundColor: "#ffffff",
            borderRadius: "50%",
            boxShadow: theme.shadows[8],
            padding: theme.spacing(2),
            overflow: "hidden",
            "& > *": {
                backgroundColor: "#e0e0e0",
                borderRadius: "50%"
            }
        }
    }
}

const ImageBackdropComponent = ({ classes, children, padding, theme }) => {
    let props = {
            className: `${classes.root}`,
            style: {}
        };
    if(padding) props.style["padding"] = `${theme.spacing(padding)}`;
    return (
        <div {...props}>
            {children}
        </div>
    );
}

export default withTheme(withStyles(ImageBackdropComponentStyles)(ImageBackdropComponent));