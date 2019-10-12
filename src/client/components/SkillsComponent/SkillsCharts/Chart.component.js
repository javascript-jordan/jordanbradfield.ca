import React from "react";
import { withStyles, withTheme } from "@material-ui/styles";

const ChartComponentStyles = theme => {
    return {
        root: {

        }
    }
}

const ChartComponent = ({ classes, className, chart, key, theme }) => {
    return (
        <div className={`${classes.root} ${className || ""}`} key={key}>
            <svg viewBox="0 0 36 36">
                <path
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="#ffffff"
                    stroke={theme.palette.primary.main}
                    stroke-width="1"
                    stroke-dasharray="75, 25"
                />
                </svg>
        </div>
    );
}

export default withTheme(withStyles(ChartComponentStyles)(ChartComponent));