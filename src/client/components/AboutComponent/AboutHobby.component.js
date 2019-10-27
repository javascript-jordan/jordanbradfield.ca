import React, { useRef } from "react";
import { withStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const AboutHobbyComponentStyles = theme => {
    return {
        root: {
            boxShadow: theme.shadows[4],
            height: 150,
            width: 150,
            transition: "background-color 100ms linear",
            marginBottom: theme.spacing(1.5),
            "&:not(:last-child)": {
                marginRight: theme.spacing(2)
            },
            "& .icon": {
                width: "40%",
                "& img": {
                    width: "100%"
                }
            },
            "& .text": {
                textTransform: "uppercase",
                marginTop: theme.spacing(2),
                "&>*": {
                    fontWeight: "bolder"
                }
            },
            "&:hover": {
                backgroundColor: theme.palette.primary.main,
                "& .text": {
                    color: "#ffffff"
                }
            }
        }
    }
}

const AboutHobbyComponent = ({ className, classes, hobby }) => {
    let self = useRef();

    function onMouseOver(){
        self.current.querySelector("img").src = hobby.white;
    }

    function onMouseLeave(){
        self.current.querySelector("img").src = hobby.black;
    }

    return (
        <div className={`${classes.root} ${className || ""} background-white cursor-crosshair flex column align-horizontal-center align-vertical-center`} onMouseEnter={onMouseOver} onMouseLeave={onMouseLeave} ref={self}>
            <div aria-hidden="true" className={`icon`}>
                <img src={hobby.black} />
            </div>
            <div className={`text`}>
                <Typography variant="subtitle2">
                    {hobby.name}
                </Typography>
            </div>
        </div>
    );
}

export default withStyles(AboutHobbyComponentStyles)(AboutHobbyComponent);