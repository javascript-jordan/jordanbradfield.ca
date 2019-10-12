import React, { useEffect, useRef } from "react";
import { withStyles } from "@material-ui/styles";
import { ArrowForward } from "@material-ui/icons";
import { Typography } from "@material-ui/core";

const SkillComponentStyles = theme => {
    return {
        root: {
            opacity: 0,
            marginBottom: theme.spacing(1),
            minHeight: "2rem",
            transition: "opacity 1s ease",
            "& .icon": {
                marginRight: theme.spacing(1),
                transition: "transform 100ms ease"
            },
            "& .text>*": {
                fontSize: "90%",
                textTransform: "uppercase"
            },
            "&:hover": {
                "& .icon": {
                    transform: "translateX(8px)"
                }
            }
        }
    }
}

const SkillComponent = ({ classes, className, key, index, item }) => {

    let self = useRef();

    useEffect(componentdidMount, []);

    function componentdidMount(){
        setOpacity();
    }

    function setOpacity(){
        setTimeout(() => {
            self.current.style.opacity = "1";
        }, index * 100);
    }

    return (
        <div className={`${classes.root} ${className || ""} flex row align-vertical-start cursor-crosshair`} key={key} ref={self}>
            <div className={`icon`}>
                <ArrowForward color="primary">

                </ArrowForward>
            </div>
            <div className={`text`}>
                <Typography color="textSecondary" variant="subtitle2">
                    {item}
                </Typography>
            </div>
        </div>
    );
}

export default withStyles(SkillComponentStyles)(SkillComponent);