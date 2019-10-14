import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles, withTheme } from "@material-ui/styles";

const ChartComponentStyles = theme => {
    return {
        root: {
            "& .create-circle": {
                borderRadius: "50%",
                position: "absolute",
                width: 150,
                height: 150,
            },
            "& .circle-container": {
                backgroundColor: "rgba(0,0,0,0.1)",
                "& .mask": {
                    clip: "rect(0px, 150px, 150px, 75px)",
                    "& .fill": {
                        clip: "rect(0px, 75px, 150px, 0px)",
                        backgroundColor: theme.palette.primary.main,
                        transform: "rotate(126deg)",   
                    },
                    "&.full": {
                        transform: "rotate(126deg)",
                    }
                },
                "& .inside-circle": {
                    width: "130px",
                    height: "130px",
                    borderRadius: "50%",
                    background: "#ffffff",
                    lineHeight: "130px",
                    textAlign: "center",
                    marginTop: "10px",
                    marginLeft: "10px",
                    position: "absolute",
                    zIndex: "100",
                    fontWeight: "700",
                    fontSize: "2em"
                }
            }
        }
    }
}

const ChartComponent = ({ classes, className, chart, key, theme }) => {
    return (
        <div className={`${classes.root} ${className || ""} flex row align-horizontal-center`} key={key}>
            <div className={`circle-container create-circle`}>
                <div className={`circle`}>
                    <div className={`mask full create-circle`}>
                        <div className={`fill create-circle`}>

                        </div>
                    </div>
                    <div className={`mask half create-circle`}>
                        <div className={`fill create-circle`}>

                        </div>
                    </div>
                    <div className="inside-circle">
                        70%
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTheme(withStyles(ChartComponentStyles)(ChartComponent));